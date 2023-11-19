/* 
 * Filename: sophisticated_program.js
 * Content: A complex program demonstrating various JavaScript concepts and functionalities.
 */

// Class representing a car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`Starting the engine of ${this.brand} ${this.model}`);
  }

  static honk() {
    console.log('Honk honk!');
  }
}

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Array of colors
const colors = ['red', 'green', 'blue'];

// Higher-order function to map and filter an array
function processArray(arr, mapFunc, filterFunc) {
  const mappedArray = arr.map(mapFunc);
  return mappedArray.filter(filterFunc);
}

// Callback functions for mapping and filtering
function double(num) {
  return num * 2;
}

function isEven(num) {
  return num % 2 === 0;
}

// Example usage of processArray function
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers, double, isEven);

// Promisify setTimeout function
function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

// Async function to perform an asynchronous operation
async function performAsyncOperation() {
  await delay(2000);
  console.log('Async operation completed!');
}

// Example usage of performAsyncOperation
performAsyncOperation();

// Regular expression to match email addresses
const emailRegex = /^[\w\-]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[a-zA-Z]{2,})$/;

// Logger class to log messages
class Logger {
  constructor() {
    this.logCount = 0;
  }

  log(message) {
    this.logCount++;
    console.log(`[${this.logCount}] ${message}`);
  }
}

// Example usage of Logger class
const logger = new Logger();
logger.log('This is a log message.');

// Exporting functions and variables
export { colors, processArray, performAsyncOperation, emailRegex };

// Importing functions and variables
import { colors, processArray, performAsyncOperation, emailRegex } from './example_module.js';