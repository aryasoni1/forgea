import React from "react";

const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Can&apos;t get hired without experience?
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Every year, thousands of talented developers get stuck in the
            classic catch-22: companies want experience, but you can&apos;t get
            experience without a job.
          </p>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Experience Gap
              </h3>
              <p className="text-gray-600">
                Entry-level positions require 2-3 years of experience, leaving
                fresh graduates with nowhere to start.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tutorial Hell
              </h3>
              <p className="text-gray-600">
                Endless tutorials and courses that don&apos;t translate to
                real-world problem-solving skills.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Weak Portfolio
              </h3>
              <p className="text-gray-600">
                Basic todo apps and calculator projects that don&apos;t impress
                hiring managers or showcase real skills.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16">
            <p className="text-lg text-gray-700 mb-6">
              Sound familiar? You&apos;re not alone. But there&apos;s a better
              way.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
