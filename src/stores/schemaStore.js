import { create } from 'zustand';

const defaultSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 1
    },
    age: {
      type: "integer",
      minimum: 0
    },
    email: {
      type: "string",
      format: "email"
    }
  },
  required: ["name", "email"]
};

export const useSchemaStore = create((set) => ({
  schema: defaultSchema,
  setSchema: (newSchema) => set({ schema: newSchema }),
}));