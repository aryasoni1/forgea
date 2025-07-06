import Link from "next/link";

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8 mx-auto">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          You&apos;re on the list!
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Thanks for joining our waitlist. We&apos;ll notify you as soon as
          Forgea launches with early access and exclusive updates.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Didn&apos;t mean to sign up?{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            Go back to the homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
