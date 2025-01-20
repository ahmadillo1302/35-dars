"use client";

import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "@/utils/firebaseAuth";
import { RootState } from "@/store/store";
import { logout } from "@/store/authSlice";
import Link from "next/link";
import { Menu, Bell, Settings, Flame } from "lucide-react";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOutUser();
    dispatch(logout());
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-purple-400 hover:text-purple-300 lg:hidden" />
            <Link href="/" className="ml-4 flex items-center space-x-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                  <Flame className="h-6 w-6 text-white animate-pulse" />
                </div>
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold text-xl hidden sm:block">
                Firebase Auth
              </span>
            </Link>
          </div>

          {user.email ? (
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-5">
                <button className="text-purple-400 hover:text-purple-300 relative group">
                  <Bell className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-pink-500 rounded-full animate-ping opacity-75"></span>
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-pink-500 rounded-full"></span>
                </button>
                <button className="text-purple-400 hover:text-purple-300 transform hover:rotate-90 transition-transform duration-300">
                  <Settings className="h-6 w-6" />
                </button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center group">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <img
                      src={user.photoURL || "/api/placeholder/40/40"}
                      alt="Profile"
                      className="relative h-10 w-10 rounded-full object-cover border-2 border-purple-500/50 group-hover:border-purple-400 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-black bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p className="text-sm font-medium text-purple-100">
                      {user.displayName || user.email?.split("@")[0]}
                    </p>
                    <p className="text-xs text-purple-400">{user.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium overflow-hidden group rounded-md"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-purple-700"></span>
                  <span className="relative text-purple-300 group-hover:text-white transition-colors duration-200">
                    Logout
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-5">
              <Link
                href="/login"
                className="px-4 py-2 text-purple-300 hover:text-purple-200 relative group"
              >
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                Login
              </Link>
              <Link
                href="/signup"
                className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:from-purple-600 hover:to-pink-600 active:scale-95 duration-300"
              >
                <span className="relative text-white">Sign Up</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
