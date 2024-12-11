export const userSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "User Profile Schema",
  description: "Schema for validating user profile data",
  type: "object",
  required: ["id", "username", "email", "profile"],
  properties: {
    id: {
      type: "string",
      pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$",
      description: "UUID v4"
    },
    username: {
      type: "string",
      minLength: 3,
      maxLength: 20,
      pattern: "^[a-zA-Z0-9_-]+$"
    },
    email: {
      type: "string",
      format: "email"
    },
    profile: {
      type: "object",
      required: ["firstName", "lastName"],
      properties: {
        firstName: { type: "string", minLength: 1 },
        lastName: { type: "string", minLength: 1 }
      }
    }
  }
};