import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaSmile } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 text-blue-600 text-2xl font-extrabold">
        <FaSmile className="text-yellow-400" />
        MoodTracker
      </Link>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link
              to="/history"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              History
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-500 text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
