'use client'; // Required for using hooks like useParams

import React from 'react';
// import Link from 'next/link'; // Removed unused import
import { useParams } from 'next/navigation'; // Hook to access route parameters

export default function ResetPasswordPage() {
  const params = useParams();
  const token = params.token; // Access the token from the URL

  // You would typically validate the token here against your backend

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-[calc(100vh-200px)]"> {/* Adjust min-height */}
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
        <div>
          {/* Placeholder Logo */}
          <div className="text-center text-2xl font-bold text-gray-700 mb-6">
            Signify
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Set a New Password
          </h2>
          {/* Display token for debugging (remove later) */}
          {/* <p className="text-center text-xs text-gray-500 mt-2">Token: {token}</p> */}
        </div>
        {/* Placeholder for Success/Error Messages */}
        {/* <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-sm">Password successfully reset. You can now log in.</div> */}
        {/* <div className="mt-4 p-3 bg-red-100 text-red-700 rounded text-sm">Invalid or expired token. Please request a new reset link.</div> */}

        <form className="mt-8 space-y-6" action="#" method="POST">
          {/* Include token as hidden field if needed for form submission */}
          <input type="hidden" name="token" value={token as string} />

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="new-password" className="sr-only">New Password</label>
              <input
                id="new-password"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="New Password"
              />
              {/* Add password visibility toggle icon here */}
            </div>
            <div>
              <label htmlFor="confirm-new-password" className="sr-only">Confirm New Password</label>
              <input
                id="confirm-new-password"
                name="confirmNewPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Confirm New Password"
              />
            </div>
          </div>

          {/* Optional Password Strength Indicator */}
          {/* <div className="h-2 bg-gray-200 rounded mt-2"> ... </div> */}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Set New Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
