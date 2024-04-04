function swapCase(inputStr) {
    // Initialize an empty string to store the result
    let swappedStr = "";

    // Iterate over each character in the input string
    for (let i = 0; i < inputStr.length; i++) {
        // Check if the character is uppercase
        if (inputStr[i] === inputStr[i].toUpperCase()) {
            // Convert uppercase character to lowercase and add it to the result string
            swappedStr += inputStr[i].toLowerCase();
        } else {
            // Convert lowercase character to uppercase and add it to the result string
            swappedStr += inputStr[i].toUpperCase();
        }
    }

    return swappedStr;
}

// Example usage:
const inputStr = 'The Quick Brown Fox';
const outputStr = swapCase(inputStr);
console.log(outputStr); // Output: tHE qUICK bROWN fOX