/**
 * Character Frequency Counter
 * 
 * Program: Counts character occurrences in a string and outputs them 
 *          in order of first appearance.
 * 
 * Approach:
 * - Use a Map to maintain insertion order (JavaScript Map preserves insertion order)
 * - Iterate through the string once, counting occurrences
 * - Exclude whitespace characters (spaces, tabs, newlines, etc.)
 * - Format output as comma-separated key:value pairs
 * 
 * Assumptions:
 * - Case sensitive: 'A' and 'a' are counted separately
 * - Whitespace EXCLUDED: spaces, tabs, newlines not counted
 * - Includes special characters and punctuation
 * - Output format: "char:count, char:count, ..."
 * 
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(k) where k is the number of unique non-whitespace characters
 */

/**
 * Count character frequencies in a string (excluding whitespace)
 * @param {string} str - Input string to analyze
 * @returns {string} - Formatted output with character frequencies
 */
function countCharacterFrequency(str) {
  // Input validation
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  if (str.length === 0) {
    return '';
  }

  // Use Map to track characters and their frequencies
  // Map maintains insertion order in JavaScript
  const frequencyMap = new Map();

  // Iterate through each character
  for (const char of str) {
    // Skip whitespace characters
    if (/\s/.test(char)) {
      continue;
    }

    if (frequencyMap.has(char)) {
      frequencyMap.set(char, frequencyMap.get(char) + 1);
    } else {
      frequencyMap.set(char, 1);
    }
  }

  // If no non-whitespace characters, return empty string
  if (frequencyMap.size === 0) {
    return '';
  }

  // Build output string in order of first appearance
  const result = [];
  for (const [char, count] of frequencyMap.entries()) {
    result.push(`${char}:${count}`);
  }

  return result.join(', ');
}

/**
 * Alternative implementation using object (for comparison)
 * Maintains order in modern JavaScript but less explicit
 */
function countCharacterFrequencyAlternative(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  if (str.length === 0) {
    return '';
  }

  const frequency = {};
  const order = []; // Track order of first appearance

  for (const char of str) {
    // Skip whitespace
    if (/\s/.test(char)) {
      continue;
    }

    if (!frequency[char]) {
      frequency[char] = 0;
      order.push(char); // Record first appearance
    }
    frequency[char]++;
  }

  // Return empty if no valid characters
  if (order.length === 0) {
    return '';
  }

  // Build output in order of first appearance
  return order.map((char) => `${char}:${frequency[char]}`).join(', ');
}

/**
 * Get character frequency with additional statistics
 * @param {string} str - Input string to analyze
 * @returns {object} - Object with formatted string and statistics
 */
function countCharacterFrequencyWithStats(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  if (str.length === 0) {
    return {
      formatted: '',
      totalCharacters: 0,
      uniqueCharacters: 0,
      mostFrequent: null,
      leastFrequent: null,
    };
  }

  const frequencyMap = new Map();
  let totalNonWhitespace = 0;

  for (const char of str) {
    // Skip whitespace
    if (/\s/.test(char)) {
      continue;
    }

    totalNonWhitespace++;
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  if (frequencyMap.size === 0) {
    return {
      formatted: '',
      totalCharacters: 0,
      uniqueCharacters: 0,
      mostFrequent: null,
      leastFrequent: null,
    };
  }

  const result = [];
  let mostFrequent = null;
  let leastFrequent = null;
  let maxcount = 0;
  let minCount = Infinity;

  for (const [char, count] of frequencyMap.entries()) {
    result.push(`${char}:${count}`);

    if (count > maxcount) {
      maxcount = count;
      mostFrequent = char;
    }

    if (count < minCount) {
      minCount = count;
      leastFrequent = char;
    }
  }

  return {
    formatted: result.join(', '),
    totalCharacters: totalNonWhitespace,
    uniqueCharacters: frequencyMap.size,
    mostFrequent: { char: mostFrequent, count: maxcount },
    leastFrequent: { char: leastFrequent, count: minCount },
  };
}

// Example usage and testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    countCharacterFrequency,
    countCharacterFrequencyAlternative,
    countCharacterFrequencyWithStats,
  };
}

// Test cases if running directly
if (typeof require !== 'undefined' && require.main === module) {
  console.log('=== Character Frequency Counter ===\n');

  const testCases = [
    'hello world',
    'aaa',
    'a',
    'abc',
    '   ',
    'The Quick Brown Fox',
    '123 456 789',
    '!@#$%^&*()',
    'Mississippi',
  ];

  testCases.forEach((testCase) => {
    console.log(`Input: "${testCase}"`);
    console.log(`Output: ${countCharacterFrequency(testCase)}`);
    
    const stats = countCharacterFrequencyWithStats(testCase);
    console.log(`Stats: Total=${stats.totalCharacters}, Unique=${stats.uniqueCharacters}`);
    console.log('---');
  });
}
