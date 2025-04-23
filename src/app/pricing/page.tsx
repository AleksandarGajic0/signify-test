import React from 'react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="text-center py-12 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Choose Your Plan</h1>
        <p className="text-lg text-gray-600">Simple plans for everyone.</p>
      </section>

      {/* Plan Comparison Table Section */}
      <section className="py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">

          {/* Free Plan */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-center">Free</h2>
            <p className="text-4xl font-bold text-center mb-6">$0<span className="text-lg font-normal">/mo</span></p>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> 3 Documents per month</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> 1 User</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Basic Field Types</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Audit Trail</li>
              <li className="flex items-center"><span className="text-gray-400 mr-2">✖</span> Priority Support</li>
            </ul>
            <Link href="/signup" className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Get Started
            </Link>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="border-2 border-blue-600 rounded-lg p-8 shadow-lg relative">
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">Pro</h2>
            <p className="text-4xl font-bold text-center mb-6">$15<span className="text-lg font-normal">/mo</span></p> {/* Placeholder Price */}
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Unlimited Documents</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> 1 User (more available)</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> All Field Types</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Audit Trail</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Priority Support</li>
            </ul>
            <Link href="/signup?plan=pro" className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Choose Pro
            </Link>
          </div>

        </div>
        {/* Optional: Contact for Enterprise */}
        <div className="text-center mt-12">
          <p className="text-gray-600">Need a custom solution? <Link href="/contact" className="text-blue-600 hover:underline">Contact Sales</Link></p>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-1">Can I cancel anytime?</h3>
            <p className="text-gray-600">Yes, you can cancel your Pro plan at any time. You'll retain access until the end of your billing period.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">What payment methods do you accept?</h3>
            <p className="text-gray-600">We accept all major credit cards. (Placeholder)</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">What counts as a document?</h3>
            <p className="text-gray-600">Each signing request you send out counts as one document towards your monthly limit on the Free plan.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
