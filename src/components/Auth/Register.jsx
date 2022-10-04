import { useState } from "react";
import { FaGithub, FaSpinner } from "react-icons/fa/index.js";
import { CgSpinner } from "react-icons/cg/index.js";
import AlertCard from "./AlertCard";
import register from "../../utils/register.js";
import LoginMethods from "./LoginMethods";

export default function Register() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleDismiss = () => {
    setError(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await register(e);
    if (response.error) {
      setError(response.error);
    }
    if (response.success) {
      return (window.location.href = "/auth/login");
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
                Register
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
                Please register an account
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {error ? (
                <AlertCard error={error} dismiss={handleDismiss} />
              ) : null}
              <div className="space-y-1 rounded-md shadow-sm">
                <div className="space-y-1">
                  <label
                    htmlFor="email-address"
                    className="select-none font-semibold text-gray-900/90 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="name"
                    autoComplete="name"
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400/80 sm:text-sm"
                    placeholder="Username"
                    disabled={loading}
                  />
                </div>
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
                <div className="space-y-1">
                  <label
                    htmlFor="c_password"
                    className="select-none font-semibold text-gray-900/90 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="c_password"
                    name="c_password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400/80 sm:text-sm"
                    placeholder="Confirm Password"
                    disabled={loading}
                  />
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
                  Register
                </button>
                <p className="text-center pt-2 dark:text-gray-400 text-sm font-medium">
                  Have an account?{" "}
                  <a
                    className="underline decoration-indigo-500 hover:text-purple-600 "
                    href="/auth/login"
                  >
                    Sign In
                  </a>
                  .
                </p>
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
