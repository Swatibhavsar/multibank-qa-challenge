/**
 * Test Suite for Character Frequency Counter
 * Tests the countCharacterFrequency function with various scenarios
 */

const {
  countCharacterFrequency,
  countCharacterFrequencyAlternative,
  countCharacterFrequencyWithStats,
} = require('./string-frequency');

// Simple assertion helper
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    return false;
  }
  console.log(`✅ PASSED: ${message}`);
  return true;
}

function runTests() {
  let passCount = 0;
  let failCount = 0;

  console.log('=== CHARACTER FREQUENCY COUNTER TEST SUITE ===\n');

  // Test 1: Basic example from requirements
  console.log('--- Test Group 1: Basic Functionality ---');
  const test1 = countCharacterFrequency('hello world');
  if (assert(test1 === 'h:1, e:1, l:3, o:2, w:1, r:1, d:1', 'Basic example: "hello world"')) {
    passCount++;
  } else {
    console.log(`  Expected: h:1, e:1, l:3, o:2, w:1, r:1, d:1`);
    console.log(`  Got: ${test1}`);
    failCount++;
  }

  // Test 2: Single character
  const test2 = countCharacterFrequency('a');
  if (assert(test2 === 'a:1', 'Single character: "a"')) {
    passCount++;
  } else {
    failCount++;
  }

  // Test 3: Repeated character
  const test3 = countCharacterFrequency('aaa');
  if (assert(test3 === 'a:3', 'Repeated character: "aaa"')) {
    passCount++;
  } else {
    failCount++;
  }

  // Test 4: Empty string
  const test4 = countCharacterFrequency('');
  if (assert(test4 === '', 'Empty string returns empty string')) {
    passCount++;
  } else {
    failCount++;
  }

  // Test 5: Case sensitivity
  console.log('\n--- Test Group 2: Case Sensitivity ---');
  const test5 = countCharacterFrequency('Aa');
  if (assert(test5 === 'A:1, a:1', 'Case sensitive: "Aa" treats A and a separately')) {
    passCount++;
  } else {
    console.log(`  Expected: A:1, a:1`);
    console.log(`  Got: ${test5}`);
    failCount++;
  }

  // Test 6: Spaces excluded
  console.log('\n--- Test Group 3: Special Characters and Spaces ---');
  const test6 = countCharacterFrequency('a b a');
  if (assert(test6 === 'a:2, b:1', 'Spaces are excluded: "a b a" -> a:2, b:1')) {
    passCount++;
  } else {
    console.log(`  Expected: a:2, b:1`);
    console.log(`  Got: ${test6}`);
    failCount++;
  }

  // Test 7: Numbers and symbols
  const test7 = countCharacterFrequency('123!23');
  if (assert(test7 === '1:1, 2:2, 3:2, !:1', 'Numbers and symbols: "123!23"')) {
    passCount++;
  } else {
    console.log(`  Expected: 1:1, 2:2, 3:2, !:1`);
    console.log(`  Got: ${test7}`);
    failCount++;
  }

  // Test 8: Order preservation
  console.log('\n--- Test Group 4: Order of First Appearance ---');
  const test8 = countCharacterFrequency('abcabc');
  if (assert(test8 === 'a:2, b:2, c:2', 'Order of first appearance: "abcabc"')) {
    passCount++;
  } else {
    console.log(`  Expected: a:2, b:2, c:2`);
    console.log(`  Got: ${test8}`);
    failCount++;
  }

  // Test 9: Longer word
  const test9 = countCharacterFrequency('mississippi');
  if (assert(test9 === 'm:1, i:4, s:4, p:2', 'Longer word: "mississippi"')) {
    passCount++;
  } else {
    console.log(`  Expected: m:1, i:4, s:4, p:2`);
    console.log(`  Got: ${test9}`);
    failCount++;
  }

  // Test 10: Whitespace only
  console.log('\n--- Test Group 5: Whitespace Handling ---');
  const test10 = countCharacterFrequency('   ');
  if (assert(test10 === '', 'Only spaces returns empty: "   "')) {
    passCount++;
  } else {
    console.log(`  Expected: (empty string)`);
    console.log(`  Got: ${test10}`);
    failCount++;
  }

  // Test 11: Tabs and special whitespace
  const test11 = countCharacterFrequency('a\tb');
  const test11Result = countCharacterFrequency('a\tb');
  if (assert(test11Result === 'a:1, b:1', 'Tab character excluded: "a\\tb" -> a:1, b:1')) {
    passCount++;
  } else {
    console.log(`  Expected: a:1, b:1`);
    console.log(`  Got: ${test11Result}`);
    failCount++;
  }

  // Test 12: Newline character
  const test12 = countCharacterFrequency('a\nb');
  if (assert(test12 === 'a:1, b:1', 'Newline character excluded: "a\\nb" -> a:1, b:1')) {
    passCount++;
  } else {
    console.log(`  Expected: a:1, b:1`);
    console.log(`  Got: ${test12}`);
    failCount++;
  }

  // Test 13: Alternative implementation
  console.log('\n--- Test Group 6: Alternative Implementation ---');
  const test13 = countCharacterFrequencyAlternative('hello world');
  if (assert(test13 === 'h:1, e:1, l:3, o:2, w:1, r:1, d:1', 'Alternative implementation matches')) {
    passCount++;
  } else {
    failCount++;
  }

  // Test 14: Statistics function
  console.log('\n--- Test Group 7: Statistical Information ---');
  const test14 = countCharacterFrequencyWithStats('hello world');
  if (assert(test14.uniqueCharacters === 8, 'Unique character count: 8 for "hello world" (excluding space)')) {
    passCount++;
  } else {
    console.log(`  Expected: 8, Got: ${test14.uniqueCharacters}`);
    failCount++;
  }

  // Test 15: Total character count (excluding whitespace)
  const test15 = countCharacterFrequencyWithStats('hello world');
  if (assert(test15.totalCharacters === 10, 'Total non-whitespace character count: 10 for "hello world"')) {
    passCount++;
  } else {
    console.log(`  Expected: 10, Got: ${test15.totalCharacters}`);
    failCount++;
  }

  // Test 16: Most frequent character
  const test16 = countCharacterFrequencyWithStats('hello world');
  if (assert(test16.mostFrequent.char === 'l' && test16.mostFrequent.count === 3, 'Most frequent: l with count 3')) {
    passCount++;
  } else {
    console.log(`  Expected: l:3, Got: ${test16.mostFrequent.char}:${test16.mostFrequent.count}`);
    failCount++;
  }

  // Test 17: Error handling - non-string input
  console.log('\n--- Test Group 8: Error Handling ---');
  try {
    countCharacterFrequency(123);
    console.log('❌ FAILED: Should throw error for non-string input');
    failCount++;
  } catch (e) {
    if (assert(e.message === 'Input must be a string', 'Throws error for non-string input')) {
      passCount++;
    } else {
      failCount++;
    }
  }

  // Test 18: Error handling - null input
  try {
    countCharacterFrequency(null);
    console.log('❌ FAILED: Should throw error for null input');
    failCount++;
  } catch (e) {
    if (assert(e.message === 'Input must be a string', 'Throws error for null input')) {
      passCount++;
    } else {
      failCount++;
    }
  }

  // Test 19: Very long string
  console.log('\n--- Test Group 9: Performance ---');
  const longString = 'a'.repeat(1000) + 'b'.repeat(1000) + 'c'.repeat(1000);
  const test19 = countCharacterFrequency(longString);
  if (assert(test19 === 'a:1000, b:1000, c:1000', 'Performance test: long string handled correctly')) {
    passCount++;
  } else {
    failCount++;
  }

  // Test 20: Special characters and symbols
  console.log('\n--- Test Group 10: Special Characters ---');
  const test20 = countCharacterFrequency('!@#!@');
  if (assert(test20 === '!:2, @:2, #:1', 'Special characters: "!@#!@"')) {
    passCount++;
  } else {
    console.log(`  Expected: !:2, @:2, #:1`);
    console.log(`  Got: ${test20}`);
    failCount++;
  }

  // Summary
  console.log('\n=== TEST SUMMARY ===');
  console.log(`✅ Passed: ${passCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`📊 Total: ${passCount + failCount}`);
  console.log(`📈 Success Rate: ${((passCount / (passCount + failCount)) * 100).toFixed(2)}%\n`);

  return failCount === 0;
}

// Run tests
const allPassed = runTests();
process.exit(allPassed ? 0 : 1);
