import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MemberUniversePage = () => {
  const { memberName } = useParams();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Welcome to <span className="text-pink-400">{memberName}'s</span> Universe
      </h1>
      <p className="text-xl mb-8">(This page is under construction)</p>
      <div className="mt-8">
        <Link
          to="/"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MemberUniversePage;
