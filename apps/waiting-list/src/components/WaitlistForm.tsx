"use client";

import React, { useState } from "react";

const WaitlistForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Form will submit naturally to FormSubmit
    // The loading state will show until redirect
  };

  return (
    <section
      id="waitlist-section"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join the Waitlist
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Be among the first to experience Forgea. Get early access and
            exclusive updates.
          </p>

          {/* Form */}
          <form
            action="https://formsubmit.co/info@forgea.tech"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            {/* Hidden Fields for FormSubmit Configuration */}
            <input
              type="hidden"
              name="_subject"
              value="New Forgea Waitlist Signup"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://forgea.tech/thanks"
            />
            <input type="hidden" name="_honey" className="hidden" />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2 text-left"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2 text-left"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Joining...
                </div>
              ) : (
                "Join Waitlist"
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-sm text-gray-500 mt-6">
              We respect your privacy. Your information will only be used to
              notify you about Forgea updates.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
