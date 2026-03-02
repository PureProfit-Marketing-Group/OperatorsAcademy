import React from 'react';

export default function CodeBlock({ children }) {
  return (
    <pre className="bg-gray-950 border border-gray-700 rounded-lg p-4 my-4 overflow-x-auto">
      <code className="text-teal-400 font-mono text-sm whitespace-pre">{children}</code>
    </pre>
  );
}
