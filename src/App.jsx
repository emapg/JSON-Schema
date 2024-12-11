import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import SchemaEditor from './components/SchemaEditor';
import JsonValidator from './components/JsonValidator';
import SchemaVisualizer from './components/SchemaVisualizer';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-right" />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Toolbar />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="space-y-8">
            <SchemaEditor />
            <SchemaVisualizer />
          </div>
          <JsonValidator />
        </div>
      </main>
    </div>
  );
}

export default App;