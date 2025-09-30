// Q: Create a function logData that:

// Takes any type of input (string | number | boolean).

// Logs it.

// Returns it.

function logData(entry: string | number | boolean){
  console.log("Logging entry:", entry); // logs it
  return entry;
}

console.log(logData("Prakhar"));
console.log(logData(2));
console.log(logData(true));