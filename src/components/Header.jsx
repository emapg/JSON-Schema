import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900">JSON Schema Generator & Validator</h1>
        <p className="mt-2 text-gray-600">Create, validate, and test JSON Schemas in real-time</p>
      </div>
    </header>
  );
}

export default Header;