// Task #2: Calculate Sum and Average of Numbers

// Function that accepts an array of numbers and returns an object with sum and average.
const calculateSumAndAverage = (numbers) => {
    // Check if the array is empty, if yes return 0 for both sum and average.
    if (numbers.length === 0) {
      return { sum: 0, average: 0 };
    }
  
    // Calculate the sum of numbers using reduce().
    // reduce() iterates through each element in the array and accumulates the sum.
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
    // Calculate the average by dividing the sum by the number of elements in the array.
    const average = sum / numbers.length;
  
    // Return an object containing both the sum and average.
    return { sum, average };
  };
  
  // Example usage:
  const numbers = [10, 20, 30, 40, 50];
  
  // Calling the function with the numbers array.
  const result = calculateSumAndAverage(numbers);
  
  // Output the result
  console.log(result); // { sum: 150, average: 30 }
  
  
  // Task #3: Remove Duplicates from an Array in constant time complexity
  
  // Function to remove duplicates from an array.
  const removeDuplicates = (arr) => {
    // Use the Set constructor to create a set from the array, 
    // which automatically removes duplicates.
    // Spread the set into a new array to return unique values.
    return [...new Set(arr)];
  };
  
  // Example array with some duplicate values.
  const strings = [
    "Ahmed", "Mohamed", "Fatima", "Ali", "Khadija", "Ali", 
    "Youssef", "Zainab", "Omar", "Noor", "Salma", "Noor"
  ];
  
  // Calling the removeDuplicates function to get unique values.
  const uniqueStrings = removeDuplicates(strings);
  
  // Output the result
  console.log(uniqueStrings); 
  // Output: ["Ahmed", "Mohamed", "Fatima", "Ali", "Khadija", "Youssef", "Zainab", "Omar", "Noor", "Salma"]
  