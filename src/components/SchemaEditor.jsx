import React, { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useSchemaStore } from '../stores/schemaStore';
import { validateSchema } from '../utils/validator';
import toast from 'react-hot-toast';
import EditorToolbar from './editor/EditorToolbar';
import ErrorDisplay from './editor/ErrorDisplay';

function SchemaEditor() {
  const { schema, setSchema } = useSchemaStore();
  const [editorValue, setEditorValue] = useState(JSON.stringify(schema, null, 2));
  const [error, setError] = useState(null);

  const handleSchemaChange = useCallback((value) => {
    setEditorValue(value);
    try {
      const parsedSchema = JSON.parse(value);
      const validationResult = validateSchema(parsedSchema);
      
      if (validationResult.valid) {
        setSchema(parsedSchema);
        setError(null);
        toast.success('Schema updated successfully');
      } else {
        setError(validationResult.errors);
        toast.error('Invalid JSON Schema');
      }
    } catch (e) {
      setError('Invalid JSON syntax');
      toast.error('Invalid JSON syntax');
    }
  }, [setSchema]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">JSON Schema Editor</h2>
      <EditorToolbar value={editorValue} onChange={handleSchemaChange} />
      <CodeMirror
        value={editorValue}
        height="500px"
        extensions={[json()]}
        onChange={handleSchemaChange}
        theme="light"
        className="border rounded-md"
      />
      <ErrorDisplay error={error} />
    </div>
  );
}

export default SchemaEditor;