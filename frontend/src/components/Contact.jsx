import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { personalInfo } from '../mock';
import { toast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: "Message Sent!",
          description: response.data.message,
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'avishek4redacidUser',
      link: personalInfo.github
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Avishek Prasad',
      link: personalInfo.linkedin
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-mono uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Let's Work Together</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form below and I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-400 transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-400 transition-colors"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-black border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-400 transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                <CardDescription className="text-gray-400">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const content = (
                    <div className="flex items-center space-x-4 p-4 bg-black/50 rounded-lg hover:bg-yellow-400/10 transition-colors duration-300 group">
                      <div className="bg-yellow-400/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                        <Icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{method.label}</div>
                        <div className="text-white font-medium">{method.value}</div>
                      </div>
                    </div>
                  );

                  return method.link ? (
                    <a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Available for Opportunities</h3>
                    <p className="text-gray-400 text-sm">
                      I'm currently open to full-time positions, freelance projects, and consulting opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
