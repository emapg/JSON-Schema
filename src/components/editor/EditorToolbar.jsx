import React from 'react';
import { useSchemaStore } from '../../stores/schemaStore';
import toast from 'react-hot-toast';

function EditorToolbar() {
  const { schema, setSchema } = useSchemaStore();

  const handleFormat = () => {
    try {
      const formatted = JSON.stringify(schema, null, 2);
      setSchema(JSON.parse(formatted));
      toast.success('Schema formatted');
    } catch (error) {
      toast.error('Invalid JSON');
    }
  };

  return (
    <div className="flex gap-2 mb-2">
      <button
        onClick={handleFormat}
        className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md"
      >
        Format
      </button>
    </div>
  );
}

export default EditorToolbar;