"use client";
import { useDispatch } from "react-redux";
import { emailSignUp, googleSignIn } from "@/utils/firebaseAuth";
import { login } from "@/store/authSlice";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; // Add this import

const Signup = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Add router

  const handleGoogleSignUp = async () => {
    try {
      const result = await googleSignIn();
      dispatch(
        login({
          email: result.user.email,
          photoURL: result.user.photoURL,
          displayName: result.user.displayName,
        })
      );
      router.push("/"); // Redirect to home page after successful signup
    } catch (error) {
      console.error("Google sign up error:", error);
      // Handle error appropriately
    }
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const email = (e.target as HTMLFormElement)["email"].value;
      const password = (e.target as HTMLFormElement)["password"].value;

      const result = await emailSignUp(email, password);
      dispatch(
        login({
          email: result.user.email,
          photoURL: result.user.photoURL,
          displayName: result.user.displayName,
        })
      );
      router.push("/"); // Redirect to home page after successful signup
    } catch (error) {
      console.error("Email sign up error:", error);
      // Handle error appropriately
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Create Account
          </h1>
          <p className="mt-3 text-gray-400">Join us today and get started</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-700/50">
            <form onSubmit={handleEmailSignUp} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-gray-300 text-sm font-medium mb-1 block">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-900/50 text-gray-100
                        border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                        transition-all duration-200 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 text-sm font-medium mb-1 block">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-900/50 text-gray-100
                        border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                        transition-all duration-200 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 text-sm font-medium mb-1 block">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Create a password"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-900/50 text-gray-100
                        border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                        transition-all duration-200 placeholder-gray-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-700 bg-gray-900/50 text-purple-500 focus:ring-purple-500/20"
                />
                <label className="ml-2 text-sm text-gray-400">
                  I agree to the{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500
                  hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium
                  transform transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Create account</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-800/50 text-gray-400">
                  Or sign up with
                </span>
              </div>
            </div>

            <button
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center px-4 py-2.5
                bg-white hover:bg-gray-100 text-gray-900 rounded-lg transition-colors duration-200"
            >
              <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
              <span className="font-medium">Continue with Google</span>
            </button>

            <p className="mt-6 text-center text-gray-400 text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
