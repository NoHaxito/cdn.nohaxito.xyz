import { useState } from "react";
import { CgSpinner } from "react-icons/cg/index.js";
import { FaGithub } from "react-icons/fa/index.js";
import AlertCard from "./AlertCard";
import login from "../../utils/login.js";
import LoginMethods from "./LoginMethods";
export default function Login() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleDismiss = () => {
    setError(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await login(e);
    if (response.error) {
      setError(response.error);
    }
    if (response.success) {
      return (window.location.href = "/app");
    }
    setLoading(false);
  };
  return (
    <>
      <div className="h-screen overflow-y-auto bg-gray-50 dark:bg-slate-900">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-4">
            <div>
              <h2 className="mt-6 text-center text-4xl font-bold tracking-tight  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Welcome back
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
                Please login to continue
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {error ? (
                <AlertCard error={error} dismiss={handleDismiss} />
              ) : null}
              <div className="space-y-2 rounded-md shadow-sm">
                <div className="space-y-1">
                  <label
                    htmlFor="email-address"
                    className="select-none font-semibold text-gray-900/90 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400/80 sm:text-sm"
                    placeholder="Email address"
                    disabled={loading}
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="select-none font-semibold text-gray-900/90 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400/80 sm:text-sm"
                    placeholder="Password"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="/"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="text-sm">
                  <a
                    href="/auth/register"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Register account
                  </a>
                </div>
              </div>
              <div>
                <button
                  className="disabled:cursor-not-allowed group relative w-full items-center justify-center inline-flex rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none"
                  disabled={loading}
                >
                  <CgSpinner
                    className={`${
                      loading
                        ? "inline mr-3 w-5 h-5 text-white animate-spin"
                        : "hidden"
                    }`}
                  />
                  Sign in
                </button>
              </div>
              <div className="inline-flex justify-center items-center w-full">
                <hr className=" w-64 h-px border-0 bg-gray-400 dark:bg-gray-700" />
                <span className="absolute left-1/2 px-3 text-sm text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">
                  OR
                </span>
              </div>
              <LoginMethods
                href={"#"}
                name="Github"
                icon={<FaGithub className="w-6 h-6" />}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
