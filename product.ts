// Task 4

// Interface to define the structure of a Product object
// A product should have a 'name' (string) and a 'price' (number)
interface Product {
    name: string;  // Name of the product
    price: number; // Price of the product
  }
  
  // Function to calculate the total price of an array of products
  // Takes an array of 'Product' objects and returns the sum of their 'price' values
  const calculateTotalPrice = (products: Product[]): number =>
    // Using the reduce method to iterate over the array and accumulate the total price
    // 'total' is the accumulator that stores the running total
    // 'product' is the current item in the array (a Product object)
    products.reduce((total, product) => total + product.price, 0); // The second argument '0' initializes the accumulator
  
  // Array of product objects with 'name' and 'price' properties
  const products: Product[] = [
    { name: "Laptop", price: 1500 },       // Laptop with a price of 1500
    { name: "Phone", price: 800 },         // Phone with a price of 800
    { name: "Tablet", price: 600 },        // Tablet with a price of 600
    { name: "Smartwatch", price: 300 },    // Smartwatch with a price of 300
    { name: "Headphones", price: 100 },    // Headphones with a price of 100
    { name: "Keyboard", price: 50 },       // Keyboard with a price of 50
    { name: "Mouse", price: 30 },          // Mouse with a price of 30
    { name: "Monitor", price: 1200 },      // Monitor with a price of 1200
  ];
  
  // Calling the calculateTotalPrice function with the 'products' array
  // This will calculate the total price of all products in the array
  const totalPrice = calculateTotalPrice(products);
  
  // Logging the total price to the console
  console.log("Total Price:", totalPrice);  // Output the total sum of all product prices
  