import React from 'react';

function ErrorDisplay({ error }) {
  if (!error) return null;

  return (
    <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
      <pre className="text-sm whitespace-pre-wrap">{
        typeof error === 'string' ? error : JSON.stringify(error, null, 2)
      }</pre>
    </div>
  );
}

export default ErrorDisplay;