#!/usr/bin/env python3
"""
Backend API Testing for Portfolio Contact Form
Tests the contact form API endpoints with various scenarios
"""

import requests
import json
import os
from datetime import datetime
import sys

# Get the backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

class ContactFormAPITester:
    def __init__(self):
        self.base_url = get_backend_url()
        if not self.base_url:
            raise Exception("Could not get REACT_APP_BACKEND_URL from frontend/.env")
        
        self.api_url = f"{self.base_url}/api"
        self.results = []
        
        print(f"Testing Contact Form API at: {self.api_url}")
        print("=" * 60)

    def log_result(self, test_name, success, details):
        """Log test result"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}")
        if details:
            print(f"   Details: {details}")
        
        self.results.append({
            'test': test_name,
            'success': success,
            'details': details,
            'timestamp': datetime.now().isoformat()
        })

    def test_valid_contact_submission(self):
        """Test 1: Valid contact form submission"""
        test_data = {
            "name": "John Doe",
            "email": "john@example.com",
            "message": "I'd like to discuss a potential project opportunity."
        }
        
        try:
            response = requests.post(f"{self.api_url}/contact", json=test_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Check response structure
                required_fields = ['success', 'message', 'id']
                missing_fields = [field for field in required_fields if field not in data]
                
                if missing_fields:
                    self.log_result("Valid Contact Submission", False, 
                                  f"Missing fields in response: {missing_fields}")
                    return False
                
                if data.get('success') != True:
                    self.log_result("Valid Contact Submission", False, 
                                  f"Expected success=True, got {data.get('success')}")
                    return False
                
                if not data.get('id'):
                    self.log_result("Valid Contact Submission", False, 
                                  "No ID returned in response")
                    return False
                
                self.log_result("Valid Contact Submission", True, 
                              f"ID: {data['id']}, Message: {data['message']}")
                return True
            else:
                self.log_result("Valid Contact Submission", False, 
                              f"Expected 200, got {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_result("Valid Contact Submission", False, f"Request failed: {str(e)}")
            return False

    def test_invalid_email_format(self):
        """Test 2: Invalid email format"""
        test_data = {
            "name": "Test User",
            "email": "invalid-email",
            "message": "Test message"
        }
        
        try:
            response = requests.post(f"{self.api_url}/contact", json=test_data, timeout=10)
            
            if response.status_code == 422:
                self.log_result("Invalid Email Format", True, 
                              "Correctly rejected invalid email with 422 status")
                return True
            else:
                self.log_result("Invalid Email Format", False, 
                              f"Expected 422 validation error, got {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_result("Invalid Email Format", False, f"Request failed: {str(e)}")
            return False

    def test_missing_required_fields(self):
        """Test 3: Missing required fields"""
        test_data = {
            "name": "Test User"
            # Missing email and message
        }
        
        try:
            response = requests.post(f"{self.api_url}/contact", json=test_data, timeout=10)
            
            if response.status_code == 422:
                self.log_result("Missing Required Fields", True, 
                              "Correctly rejected missing fields with 422 status")
                return True
            else:
                self.log_result("Missing Required Fields", False, 
                              f"Expected 422 validation error, got {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_result("Missing Required Fields", False, f"Request failed: {str(e)}")
            return False

    def test_retrieve_all_submissions(self):
        """Test 4: Retrieve all contact submissions"""
        try:
            response = requests.get(f"{self.api_url}/contact/submissions", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if not isinstance(data, list):
                    self.log_result("Retrieve All Submissions", False, 
                                  f"Expected array, got {type(data)}")
                    return False
                
                # Check if we have submissions and verify structure
                if len(data) > 0:
                    submission = data[0]
                    required_fields = ['id', 'name', 'email', 'message', 'timestamp', 'status']
                    missing_fields = [field for field in required_fields if field not in submission]
                    
                    if missing_fields:
                        self.log_result("Retrieve All Submissions", False, 
                                      f"Missing fields in submission: {missing_fields}")
                        return False
                
                self.log_result("Retrieve All Submissions", True, 
                              f"Retrieved {len(data)} submissions successfully")
                return True
            else:
                self.log_result("Retrieve All Submissions", False, 
                              f"Expected 200, got {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_result("Retrieve All Submissions", False, f"Request failed: {str(e)}")
            return False

    def test_filter_submissions_by_status(self):
        """Test 5: Filter submissions by status"""
        try:
            response = requests.get(f"{self.api_url}/contact/submissions?status=new", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if not isinstance(data, list):
                    self.log_result("Filter Submissions by Status", False, 
                                  f"Expected array, got {type(data)}")
                    return False
                
                # Check if all returned submissions have status="new"
                for submission in data:
                    if submission.get('status') != 'new':
                        self.log_result("Filter Submissions by Status", False, 
                                      f"Found submission with status '{submission.get('status')}', expected 'new'")
                        return False
                
                self.log_result("Filter Submissions by Status", True, 
                              f"Retrieved {len(data)} submissions with status='new'")
                return True
            else:
                self.log_result("Filter Submissions by Status", False, 
                              f"Expected 200, got {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_result("Filter Submissions by Status", False, f"Request failed: {str(e)}")
            return False

    def test_api_health_check(self):
        """Test 0: Basic API health check"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('message') == 'Hello World':
                    self.log_result("API Health Check", True, "API is responding correctly")
                    return True
                else:
                    self.log_result("API Health Check", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_result("API Health Check", False, 
                              f"Expected 200, got {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_result("API Health Check", False, f"Request failed: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all tests and return summary"""
        print("Starting Contact Form API Tests...")
        print()
        
        # Run tests in order
        tests = [
            self.test_api_health_check,
            self.test_valid_contact_submission,
            self.test_invalid_email_format,
            self.test_missing_required_fields,
            self.test_retrieve_all_submissions,
            self.test_filter_submissions_by_status
        ]
        
        passed = 0
        total = len(tests)
        
        for test in tests:
            if test():
                passed += 1
            print()  # Add spacing between tests
        
        # Summary
        print("=" * 60)
        print(f"TEST SUMMARY: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 All tests passed! Contact Form API is working correctly.")
        else:
            print(f"⚠️  {total - passed} test(s) failed. See details above.")
        
        return passed == total

def main():
    """Main test execution"""
    try:
        tester = ContactFormAPITester()
        success = tester.run_all_tests()
        
        # Save results to file for reference
        with open('/app/contact_api_test_results.json', 'w') as f:
            json.dump({
                'timestamp': datetime.now().isoformat(),
                'total_tests': len(tester.results),
                'passed_tests': sum(1 for r in tester.results if r['success']),
                'overall_success': success,
                'results': tester.results
            }, f, indent=2)
        
        return 0 if success else 1
        
    except Exception as e:
        print(f"❌ Test execution failed: {str(e)}")
        return 1

if __name__ == "__main__":
    sys.exit(main())