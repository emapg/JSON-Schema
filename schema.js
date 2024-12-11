const userSchema = {
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
    age: {
      type: "integer",
      minimum: 13,
      maximum: 120
    },
    profile: {
      type: "object",
      required: ["firstName", "lastName"],
      properties: {
        firstName: {
          type: "string",
          minLength: 1
        },
        lastName: {
          type: "string",
          minLength: 1
        },
        bio: {
          type: "string",
          maxLength: 500
        },
        socialLinks: {
          type: "array",
          items: {
            type: "object",
            required: ["platform", "url"],
            properties: {
              platform: {
                type: "string",
                enum: ["twitter", "facebook", "linkedin", "github"]
              },
              url: {
                type: "string",
                format: "uri"
              }
            }
          },
          maxItems: 5
        }
      }
    },
    tags: {
      type: "array",
      items: {
        type: "string",
        minLength: 1,
        maxLength: 20
      },
      uniqueItems: true,
      maxItems: 10
    },
    settings: {
      type: "object",
      properties: {
        theme: {
          type: "string",
          enum: ["light", "dark", "system"]
        },
        notifications: {
          type: "boolean"
        },
        language: {
          type: "string",
          pattern: "^[a-z]{2}-[A-Z]{2}$"
        }
      },
      additionalProperties: false
    }
  },
  additionalProperties: false
}

module.exports = { userSchema };