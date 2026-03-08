import React, { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'oa_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4">
      <div className="max-w-2xl mx-auto bg-gray-800 border border-gray-700 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-2xl">
        <p className="text-sm text-gray-400 flex-1">
          We use privacy-friendly analytics to understand how people use this site. No tracking cookies.{' '}
          <a href="/privacy" className="text-teal-400 hover:underline">Learn more</a>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 text-xs text-gray-400 border border-gray-600 rounded-lg hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-3 py-1.5 text-xs text-white bg-teal-600 rounded-lg hover:bg-teal-500 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
