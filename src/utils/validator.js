import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

export function validateSchema(schema) {
  try {
    ajv.compile(schema);
    return { valid: true };
  } catch (e) {
    return { valid: false, errors: e.message };
  }
}

export function validateJson(schema, data) {
  try {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    
    return {
      valid,
      errors: validate.errors || []
    };
  } catch (e) {
    return {
      valid: false,
      errors: [{ message: e.message }]
    };
  }
}