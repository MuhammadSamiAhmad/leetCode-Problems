const twoSum = (nums, target) => {
  const map = new Map(); // Create a Map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    // Loop through the array
    const diff = target - nums[i]; // Calculate the difference needed to reach the target

    if (map.has(diff)) {
      // Check if the difference is already in the Map
      return [map.get(diff), i]; // Return the indices of the two numbers that add up to target
    }

    map.set(nums[i], i); // Store the current number and its index in the Map
  }

  return []; // Return an empty array if no solution is found
};

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

/*
  Why Use a Map?
  
  - A `Map` provides **O(1) lookup time**, so checking if `diff` exists is very fast.
  - Without a `Map`, we'd need a nested loop, which results in **O(n²) time complexity**.
  - Using a `Map`, the function runs in **O(n) time complexity**, making it much more efficient.
  
  Map Methods:
  
  - `map.set(key, value)`: Adds a key-value pair to the map.
  - `map.get(key)`: Retrieves the value associated with the given key. Returns `undefined` if the key does not exist.
  - `map.has(key)`: Returns `true` if the key exists in the map, otherwise `false`.
  - `map.delete(key)`: Removes the key-value pair from the map.
  - `map.size`: Returns the number of key-value pairs in the map.
  - `map.clear()`: Removes all key-value pairs from the map.
  - `map.keys()`: Returns an iterator for all keys in the map.
  - `map.values()`: Returns an iterator for all values in the map.
  - `map.entries()`: Returns an iterator for all key-value pairs in the map.
  */
