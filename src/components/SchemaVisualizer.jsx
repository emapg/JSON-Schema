import React from 'react';
import ReactJson from 'react-json-view';
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
        <ReactJson
          src={schema}
          theme={theme === 'dark' ? 'monokai' : 'rjv-default'}
          name={false}
          collapsed={2}
          displayDataTypes={false}
          enableClipboard={true}
        />
      </div>
    </div>
  );
}

export default SchemaVisualizer;