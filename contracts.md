# Portfolio Backend Integration Contracts

## Overview
This document outlines the backend APIs and integration plan for Avishek's portfolio website.

## Current Mock Data (in mock.js)
- `personalInfo` - Static personal information
- `techStack` - Technologies and proficiency levels
- `projects` - Project details (BestWe, JWD, Zrupee, TeamNest)
- `experience` - Work experience timeline

## Backend APIs to Implement

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for reaching out. I'll get back to you soon!",
  "id": "contact_submission_id"
}
```

**MongoDB Collection:** `contact_submissions`
**Fields:**
- name (string)
- email (string)
- message (string)
- timestamp (datetime)
- status (string: "new", "read", "replied")
- id (string)

### 2. Get All Contact Submissions (Admin)
**Endpoint:** `GET /api/contact/submissions`

**Response:**
```json
{
  "submissions": [
    {
      "id": "uuid",
      "name": "string",
      "email": "string",
      "message": "string",
      "timestamp": "ISO date",
      "status": "new"
    }
  ]
}
```

## Frontend Integration Changes

### Contact.jsx
**Before:** 
- Mock submission with setTimeout
- Shows toast notification locally

**After:**
- Call `POST /api/contact` endpoint
- Handle API response/errors
- Show toast based on API response
- Display error message if API fails

**Changes Required:**
```javascript
// Replace mock submission
const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
if (response.data.success) {
  toast({ title: "Message Sent!", description: response.data.message });
}
```

## Implementation Steps
1. ✅ Create MongoDB model for contact submissions
2. ✅ Implement POST /api/contact endpoint
3. ✅ Implement GET /api/contact/submissions endpoint (admin)
4. ✅ Update Contact.jsx to use backend API
5. ✅ Test contact form submission
6. ✅ Verify data is stored in MongoDB

## Notes
- Resume download is already functional (direct PDF link)
- All other data (projects, tech stack, experience) remains static in mock.js
- No authentication required for contact form
- Email notifications can be added later if needed
