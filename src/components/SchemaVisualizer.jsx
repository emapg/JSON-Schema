import React from 'react';
import { JSONTree } from 'react-json-tree';  // Use the correct named import
import { useSchemaStore } from '../stores/schemaStore';
import { useThemeStore } from '../stores/themeStore';

function SchemaVisualizer() {
  const { schema } = useSchemaStore();
  const { theme } = useThemeStore();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Schema Visualization
      </h3>
      <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
        <JSONTree
          data={schema}  // Use 'data' prop instead of 'src'
          theme={theme === 'dark' ? 'monokai' : 'rjv-default'}
        />
      </div>
    </div>
  );
}

export default SchemaVisualizer;
