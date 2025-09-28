"use client";
import { useState } from 'react';
import { themeColors } from '../../components/theme';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have questions about our products? Need help choosing the right bike or scooter? 
          We're here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us how we can help you..."
              />
            </div>
            
            <button
              type="submit"
              className={`w-full px-6 py-3 rounded-lg text-lg font-semibold ${themeColors.primary}`}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Phone</h3>
              <p className="text-gray-600">1-800-KIDSPORT</p>
              <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM EST</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Email</h3>
              <p className="text-gray-600">hello@kidssport.com</p>
              <p className="text-sm text-gray-500">We respond within 24 hours</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Address</h3>
              <p className="text-gray-600">
                123 Kids Street<br />
                Playground City, PC 12345<br />
                United States
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">What age range do your products cover?</h4>
                <p className="text-sm text-gray-600">Our products are designed for children from 2 to 15 years old.</p>
              </div>
              <div>
                <h4 className="font-medium">Do you offer assembly services?</h4>
                <p className="text-sm text-gray-600">Yes! We provide free assembly for all bikes and scooters.</p>
              </div>
              <div>
                <h4 className="font-medium">What's your return policy?</h4>
                <p className="text-sm text-gray-600">We offer a 30-day return policy for unused items in original packaging.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
