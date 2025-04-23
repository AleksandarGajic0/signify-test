import React from 'react';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="text-center py-12 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Security is Our Priority</h1>
        <p className="text-lg text-gray-600">Learn about the measures we take to protect your data.</p>
      </section>

      {/* Content Blocks Section */}
      <section className="py-16 max-w-4xl mx-auto space-y-10">

        {/* Data Encryption */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Data Encryption</h2>
          <p className="text-gray-600 leading-relaxed">
            We prioritize the security of your documents and data. All data is encrypted both in transit (using TLS/SSL) and at rest using industry-standard encryption algorithms. This ensures that your sensitive information remains confidential and protected from unauthorized access.
            (Placeholder - Specific details depend on backend implementation).
          </p>
        </div>

        {/* Secure Access */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Secure Access</h2>
          <p className="text-gray-600 leading-relaxed">
            Access to your Signify account is protected by secure password hashing. Signing links sent to recipients are unique and time-sensitive (where applicable) to prevent unauthorized access to documents during the signing process. We are continuously evaluating additional security measures like Two-Factor Authentication (2FA) for future implementation.
          </p>
        </div>

        {/* Infrastructure */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Infrastructure</h2>
          <p className="text-gray-600 leading-relaxed">
            Signify is hosted on reliable and secure cloud infrastructure (e.g., Vercel/AWS - Placeholder). Our infrastructure providers maintain high standards of physical and network security, ensuring the availability and integrity of our service. Regular backups and monitoring are in place.
          </p>
        </div>

        {/* Legal Compliance */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Legal Compliance</h2>
          <p className="text-gray-600 leading-relaxed">
            Signify is designed with awareness of electronic signature laws like the ESIGN Act and UETA in the United States. Our platform includes features like comprehensive audit trails that record key events throughout the document lifecycle (upload, view, sign, completion) to support the legal validity of signatures obtained through our service.
          </p>
        </div>

        {/* Data Privacy */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Data Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to protecting your privacy. Our data handling practices are outlined in our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>. We only collect and process data necessary to provide our services and do not sell your personal information.
          </p>
        </div>

        {/* Contact */}
        <div className="pt-6 border-t mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Have Questions?</h2>
          <p className="text-gray-600">
            If you have specific security concerns or questions, please don't hesitate to <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>.
            {/* Or provide a specific email: security@signify.example.com */}
          </p>
        </div>

      </section>
    </div>
  );
}
