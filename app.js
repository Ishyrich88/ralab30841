// Part 1: Refactoring Old Code 

// Part 2: Expanding Functionality :
/**
Begin with the following task: 
•	Declare a variable that stores the number of columns in each row of data within the CSV. 
•	Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
   This should be calculated dynamically based on the first row of data. 
 */


   function feelingLoopy(str) {
    // Split the input string into rows by newline character
    const rows = str.split('\n');
    console.log(rows);
 
    // Extract the keys from the first row
    const keys = rows[0].split(',');
    const numColumns = keys.length; // Number of columns
    console.log(`Number of columns: ${numColumns}`);
 
    // Initialize an array to hold the objects
    const result = [];
 
    // Loop through each row starting from the second row
    for (let i = 1; i < rows.length; i++) {
        const values = rows[i].split(',');
        const obj = {};
 
        // Assign values to the corresponding keys
        for (let j = 0; j < keys.length; j++) {
            obj[keys[j]] = values[j];
        }
 
        // Add the object to the result array
        result.push(obj);
    }
 
    console.log(result); // Log the resulting array of objects
    return result; // Return the array of objects
 }
 
 function convertToCSV(data) {
    if (!data.length) {
        return '';
    }
 
    // Extract the keys (header)
    const keys = Object.keys(data[0]);
    const header = keys.join(',');
 
    // Convert each object to a CSV row
    const rows = data.map(obj => keys.map(key => obj[key]).join(','));
 
    // Combine the header and rows
    const csv = [header, ...rows].join('');
    
    return csv;
 }
 
 const CSV_string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Assistant,26"; 
 // Example usage
 const dataArr = feelingLoopy(CSV_string);
 const csvOutput = convertToCSV(dataArr);
 console.log(csvOutput);