import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useSchemaStore } from '../stores/schemaStore';
import { validateJson } from '../utils/validator';
import ValidationResults from './ValidationResults';

function JsonValidator() {
  const { schema } = useSchemaStore();
  const [jsonData, setJsonData] = useState('{}');
  const [validationResults, setValidationResults] = useState(null);

  const handleJsonChange = (value) => {
    try {
      const parsedJson = JSON.parse(value);
      setJsonData(value);
      const results = validateJson(schema, parsedJson);
      setValidationResults(results);
    } catch (e) {
      setValidationResults({ valid: false, errors: ['Invalid JSON syntax'] });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">JSON Validator</h2>
      <CodeMirror
        value={jsonData}
        height="300px"
        extensions={[json()]}
        onChange={handleJsonChange}
        theme="light"
        className="border rounded-md"
      />
      <ValidationResults results={validationResults} />
    </div>
  );
}

export default JsonValidator;