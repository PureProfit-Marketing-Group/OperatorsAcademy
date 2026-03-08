import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 7, 2026</p>

        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">What we collect</h2>
            <p>When you create an account, we collect:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
              <li><strong className="text-gray-200">Name</strong> — to personalize your experience</li>
              <li><strong className="text-gray-200">Email address</strong> — for account access and communication</li>
              <li><strong className="text-gray-200">Avatar</strong> — if you sign in with Google, we receive your Google profile picture</li>
            </ul>
            <p className="mt-3">We also collect anonymous usage analytics (page views, navigation patterns) via Vercel Web Analytics, which is cookieless and privacy-friendly.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">How we use your data</h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Provide account access to tools, install commands, and templates</li>
              <li>Send occasional updates about new course modules or tools (you can unsubscribe anytime)</li>
              <li>Understand how the site is used so we can improve it</li>
            </ul>
            <p className="mt-3">We will never sell your data or share it with advertisers.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Third-party services</h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong className="text-gray-200">Supabase</strong> — authentication and data storage (hosted in the US)</li>
              <li><strong className="text-gray-200">Vercel</strong> — hosting and privacy-friendly web analytics</li>
              <li><strong className="text-gray-200">Google</strong> — OAuth sign-in (only if you choose to sign in with Google)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Cookies</h2>
            <p>
              Vercel Web Analytics does not use cookies. We use <code className="text-gray-300">localStorage</code> to
              remember your cookie consent preference and authentication session. No third-party tracking cookies are used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Data retention</h2>
            <p>
              Your account data is retained as long as your account exists. If you want your data deleted,
              contact us and we'll remove your account and all associated data within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Your rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
              <li>Access the data we hold about you</li>
              <li>Request deletion of your account and data</li>
              <li>Unsubscribe from any emails we send</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <p>
              For any privacy-related questions or requests, email{' '}
              <a href="mailto:ehoyos@satori-labs.cloud" className="text-teal-400 hover:underline">
                ehoyos@satori-labs.cloud
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
