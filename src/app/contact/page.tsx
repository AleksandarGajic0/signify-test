import React from 'react';

export default function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="text-center py-12 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Get In Touch</h1>
        <p className="text-lg text-gray-600">We'd love to hear from you.</p> {/* Escaped ' */}
      </section>

      {/* Contact Form Section */}
      <section className="py-16 max-w-2xl mx-auto">
        {/* Placeholder for Success/Error Messages */}
        {/* <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">Success message here</div> */}
        {/* <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">Error message here</div> */}

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="How can we help?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Optional Direct Contact Info */}
        <div className="mt-12 text-center text-gray-600">
          <p>You can also reach us at:</p>
          <a href="mailto:support@signify.example.com" className="text-blue-600 hover:underline">
            support@signify.example.com
          </a> (Placeholder)
        </div>
      </section>
    </div>
  );
}
