import jsf from 'json-schema-faker';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

jsf.extend('faker', () => require('@faker-js/faker'));
const ajv = new Ajv();
addFormats(ajv);

export function generateMockData(schema) {
  try {
    const validate = ajv.compile(schema);
    const mockData = jsf.generate(schema);
    
    if (validate(mockData)) {
      return mockData;
    }
    throw new Error('Generated data does not match schema');
  } catch (error) {
    throw new Error(`Failed to generate mock data: ${error.message}`);
  }
}