import React from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function GatedRoute({ children }) {
  const { isAuthenticated, loading, openAuthModal, isVerificationExpired, resendVerification } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (isVerificationExpired) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="max-w-md text-center px-4">
          <div className="p-3 bg-yellow-500/20 rounded-full w-fit mx-auto mb-4">
            <Lock className="text-yellow-400" size={24} />
          </div>
          <h2 className="text-xl font-bold mb-2">Please verify your email</h2>
          <p className="text-gray-400 text-sm mb-6">
            Check your inbox for a verification link. You need to verify your email to keep accessing tools.
          </p>
          <button
            onClick={() => resendVerification()}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-500 transition-colors"
          >
            Resend verification email
          </button>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="max-w-md text-center px-4">
          <div className="p-3 bg-teal-500/20 rounded-full w-fit mx-auto mb-4">
            <Lock className="text-teal-400" size={24} />
          </div>
          <h2 className="text-xl font-bold mb-2">Free account required</h2>
          <p className="text-gray-400 text-sm mb-6">
            Create a free account to access tools, install commands, and templates. Takes about 10 seconds.
          </p>
          <button
            onClick={() => openAuthModal()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-lg font-medium text-sm hover:bg-teal-500 transition-colors"
          >
            Sign up free <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  return children;
}
