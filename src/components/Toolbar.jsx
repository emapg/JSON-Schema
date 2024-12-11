import React from 'react';
import { useSchemaStore } from '../stores/schemaStore';
import { generateMockData } from '../utils/mockDataGenerator';
import toast from 'react-hot-toast';

function Toolbar() {
  const { schema, setSchema } = useSchemaStore();

  const handleGenerateMockData = () => {
    try {
      const mockData = generateMockData(schema);
      navigator.clipboard.writeText(JSON.stringify(mockData, null, 2));
      toast.success('Mock data copied to clipboard!');
    } catch (error) {
      toast.error('Failed to generate mock data');
    }
  };

  const handleLoadExample = () => {
    setSchema(require('../data/exampleSchemas').userSchema);
    toast.success('Example schema loaded');
  };

  const handleClear = () => {
    setSchema({
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {},
      required: []
    });
    toast.success('Schema cleared');
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button
        onClick={handleGenerateMockData}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Generate Mock Data
      </button>
      <button
        onClick={handleLoadExample}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Load Example
      </button>
      <button
        onClick={handleClear}
        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
      >
        Clear
      </button>
    </div>
  );
}

export default Toolbar;