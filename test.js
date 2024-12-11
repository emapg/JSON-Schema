const assert = require('assert');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const { userSchema } = require('./schema');

const ajv = new Ajv();
addFormats(ajv);
const validate = ajv.compile(userSchema);

// Test cases
console.log('Running tests...\n');

// Test 1: Valid minimal data
const test1 = () => {
  const data = {
    id: "123e4567-e89b-4d3c-8456-426614174000",
    username: "test_user",
    email: "test@example.com",
    profile: {
      firstName: "Test",
      lastName: "User"
    }
  };
  
  assert.strictEqual(validate(data), true, 'Test 1 failed: Minimal valid data should pass validation');
  console.log('✅ Test 1 passed: Minimal valid data');
};

// Test 2: Invalid email format
const test2 = () => {
  const data = {
    id: "123e4567-e89b-4d3c-8456-426614174000",
    username: "test_user",
    email: "invalid-email",
    profile: {
      firstName: "Test",
      lastName: "User"
    }
  };
  
  assert.strictEqual(validate(data), false, 'Test 2 failed: Invalid email should fail validation');
  console.log('✅ Test 2 passed: Invalid email detected');
};

// Test 3: Invalid username pattern
const test3 = () => {
  const data = {
    id: "123e4567-e89b-4d3c-8456-426614174000",
    username: "test@user",  // @ is not allowed
    email: "test@example.com",
    profile: {
      firstName: "Test",
      lastName: "User"
    }
  };
  
  assert.strictEqual(validate(data), false, 'Test 3 failed: Invalid username should fail validation');
  console.log('✅ Test 3 passed: Invalid username detected');
};

// Run all tests
try {
  test1();
  test2();
  test3();
  console.log('\n🎉 All tests passed!');
} catch (error) {
  console.error('\n❌ Test failed:', error.message);
  process.exit(1);
}