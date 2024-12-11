import { useCallback } from 'react';
import toast from 'react-hot-toast';

export function useEditor() {
  const formatJson = useCallback((jsonString) => {
    try {
      return JSON.stringify(JSON.parse(jsonString), null, 2);
    } catch (error) {
      toast.error('Invalid JSON syntax');
      return jsonString;
    }
  }, []);

  return { formatJson };
}