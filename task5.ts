// Function to validate if the given email is in a valid format
const isValidEmail = (email: string): boolean => {
    // Regular expression (regex) pattern to validate email address format
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    
    // Use the test() method of the regex to check if the email matches the pattern
    return emailRegex.test(email);  // Returns true if the email matches, otherwise false
  };
  
  // Array of email addresses to be validated
  [
    "osamamarei2001@example.com",  // Valid email
    "test@test.test",              // Valid email
    "test@example.com",            // Valid email
    "invalid-email",               // Invalid email (missing @ and domain)
    "test@example.",               // Invalid email (missing domain part after dot)
    "test@example",                // Invalid email (missing dot and domain after @)
    "@example",                    // Invalid email (missing username before @)
    ".test",                       // Invalid email (missing domain and @)
  ].forEach((email) => console.log(isValidEmail(email)));  // Logs the result of validation for each email
  