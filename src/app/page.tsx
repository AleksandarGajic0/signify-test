import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Simple, Secure E-Signatures
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get your documents signed quickly and easily. Signify makes electronic signatures effortless.
        </p>
        <div className="space-x-4">
          <Link href="/signup" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 text-lg">
            Get Started Free
          </Link>
          {/* Optional Secondary CTA */}
          {/* <Link href="/features" className="text-blue-600 hover:underline">
            See Features
          </Link> */}
        </div>
        {/* Placeholder for Visual Element */}
        <div className="mt-12 h-64 bg-gray-200 rounded-lg max-w-4xl mx-auto flex items-center justify-center">
          <p className="text-gray-500">[Illustration or Product Mockup Placeholder]</p>
        </div>
      </section>

      {/* Key Features Overview Section */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Everything You Need to Sign Online
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <div className="text-blue-600 mb-3">[Icon]</div> {/* Placeholder */}
            <h3 className="text-xl font-semibold mb-2">Easy Upload</h3>
            <p className="text-gray-600">Quickly upload your PDF documents.</p>
          </div>
          {/* Feature 2 */}
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <div className="text-blue-600 mb-3">[Icon]</div> {/* Placeholder */}
            <h3 className="text-xl font-semibold mb-2">Place Fields Simply</h3>
            <p className="text-gray-600">Drag and drop signature, date, and text fields.</p>
          </div>
          {/* Feature 3 */}
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <div className="text-blue-600 mb-3">[Icon]</div> {/* Placeholder */}
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">See who has viewed and signed your documents.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Get Documents Signed in 3 Easy Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {/* Step 1 */}
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
            <h3 className="text-xl font-semibold mb-2">Upload</h3>
            <p className="text-gray-600">Upload your document (PDF).</p>
          </div>
          {/* Step 2 */}
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <h3 className="text-xl font-semibold mb-2">Add Signers & Fields</h3>
            <p className="text-gray-600">Specify who needs to sign and where.</p>
          </div>
          {/* Step 3 */}
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <h3 className="text-xl font-semibold mb-2">Send & Track</h3>
            <p className="text-gray-600">Send it off and monitor the status.</p>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Indicators Section (Placeholder) */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Trusted by Businesses</h2>
        <p className="text-gray-600 mb-4">[Testimonial Snippets or Logos Placeholder]</p>
        <p className="text-gray-600">
          Your documents are secured. <Link href="/security" className="text-blue-600 hover:underline">Learn more about security</Link>.
        </p>
      </section>

      {/* Pricing Teaser Section */}
      <section className="py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Start Free, Upgrade When Ready
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Simple, transparent pricing plans to fit your needs.
        </p>
        <Link href="/pricing" className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-100">
          View Pricing
        </Link>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Simplify Your Signatures?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join thousands of users streamlining their document workflows.
        </p>
        <Link href="/signup" className="px-8 py-4 bg-blue-600 text-white rounded hover:bg-blue-700 text-xl font-semibold">
          Sign Up Free
        </Link>
      </section>
    </div>
  );
}
