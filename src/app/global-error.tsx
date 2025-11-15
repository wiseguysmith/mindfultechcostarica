'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center px-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              Something went wrong!
            </h1>
            <p className="text-gray-600 mb-6">{error.message}</p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-[#2DB6A3] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

