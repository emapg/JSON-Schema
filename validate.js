const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const addErrors = require('ajv-errors');

const { userSchema } = require('./schema');

// Initialize Ajv with all keywords and formats
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
addErrors(ajv);

// Compile schema
const validate = ajv.compile(userSchema);

// Example valid data
const validData = {
  id: "123e4567-e89b-4d3c-8456-426614174000",
  username: "john_doe",
  email: "john.doe@example.com",
  age: 25,
  profile: {
    firstName: "John",
    lastName: "Doe",
    bio: "Software developer and tech enthusiast",
    socialLinks: [
      {
        platform: "github",
        url: "https://github.com/johndoe"
      }
    ]
  },
  tags: ["developer", "javascript"],
  settings: {
    theme: "dark",
    notifications: true,
    language: "en-US"
  }
};

// Example invalid data
const invalidData = {
  id: "invalid-uuid",
  username: "j",  // too short
  email: "invalid-email",
  age: 10,  // below minimum
  profile: {
    firstName: "",  // empty string
    lastName: "Doe",
    socialLinks: [
      {
        platform: "invalid-platform",  // not in enum
        url: "not-a-url"
      }
    ]
  }
};

console.log("\nValidating valid data:");
if (validate(validData)) {
  console.log("✅ Valid data passes validation");
} else {
  console.log("❌ Validation errors:", validate.errors);
}

console.log("\nValidating invalid data:");
if (validate(invalidData)) {
  console.log("✅ Data is valid");
} else {
  console.log("❌ Validation errors:");
  validate.errors.forEach((error, index) => {
    console.log(`${index + 1}. ${error.instancePath}: ${error.message}`);
  });
}