import React from 'react';
import clsx from 'clsx';

function ValidationResults({ results }) {
  if (!results) return null;

  return (
    <div className="mt-4">
      <div
        className={clsx(
          'p-4 rounded-md',
          results.valid
            ? 'bg-green-50 text-green-700'
            : 'bg-red-50 text-red-700'
        )}
      >
        <h3 className="font-semibold mb-2">
          {results.valid ? 'Validation Passed' : 'Validation Errors'}
        </h3>
        {!results.valid && (
          <ul className="list-disc list-inside">
            {results.errors.map((error, index) => (
              <li key={index} className="text-sm">
                {error.instancePath} {error.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ValidationResults;