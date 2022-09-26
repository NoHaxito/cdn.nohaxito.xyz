export default function CTA() {
  return (
    <div className="bg-white dark:bg-slate-900 py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 dark:bg-slate-800 rounded-lg gap-4 p-4 md:p-8">
          <div>
            <h2 className="text-indigo-500 dark:text-indigo-400 text-xl md:text-2xl font-bold">
              Start now for free
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              No Credit Card required
            </p>
          </div>

          <a
            href="/app"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            Start now
          </a>
        </div>
      </div>
    </div>
  );
}
