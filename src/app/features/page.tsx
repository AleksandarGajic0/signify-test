import React from 'react';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="text-center py-12 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Signify Features</h1>
        <p className="text-lg text-gray-600">Streamline your document workflows.</p>
      </section>

      {/* Feature Categories Section */}
      {/* Added bg-white to ensure light background for dark text content */}
      <section className="py-16 max-w-6xl mx-auto bg-white">

        {/* Category 1: Document Preparation */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Document Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Upload PDF</h3>
              <p className="text-sm text-gray-600">Easily upload your documents.</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Add Signers/CCs</h3>
              <p className="text-sm text-gray-600">Specify recipients and viewers.</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Field Placement</h3>
              <p className="text-sm text-gray-600">Add Signature, Initials, Date, Text, Checkbox fields.</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Drag & Drop Interface</h3>
              <p className="text-sm text-gray-600">Intuitively place fields on your document.</p>
            </div>
          </div>
        </div>

        {/* Category 2: Signing Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Signing Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Email Notifications</h3>
              <p className="text-sm text-gray-600">Signers get notified instantly.</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Guided Signing</h3>
              <p className="text-sm text-gray-600">Easy-to-follow steps for signers.</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Simple Signing Options</h3>
              <p className="text-sm text-gray-600">Type or draw your signature (Typed initially).</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Mobile Responsive Signing</h3>
              <p className="text-sm text-gray-600">Sign documents on any device.</p>
            </div>
          </div>
        </div>

        {/* Category 3: Tracking & Management */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Tracking & Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Document Dashboard</h3>
              <p className="text-sm text-gray-600">Manage all your documents in one place.</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Status Tracking</h3>
              <p className="text-sm text-gray-600">See Sent, Viewed, Signed statuses.</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Audit Trail</h3>
              <p className="text-sm text-gray-600">Detailed history of document events.</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Download Signed Docs</h3>
              <p className="text-sm text-gray-600">Get final copies easily.</p>
            </div>
          </div>
        </div>

        {/* Category 4: Security & Compliance */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Security & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Secure Links</h3>
              <p className="text-sm text-gray-600">Unique links for signers.</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">Encryption</h3>
              <p className="text-sm text-gray-600">Data encrypted at rest and in transit.</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-1">ESIGN/UETA Awareness</h3>
              <p className="text-sm text-gray-600">Designed with compliance in mind.</p>
            </div>
          </div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to simplify signing?
        </h2>
        <Link href="/signup" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Sign Up Free
        </Link>
      </section>
    </div>
  );
}
