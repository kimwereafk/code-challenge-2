function swapCase(inputStr) {
    let swappedStr = "";

    // Iterate over each character in the input string
    for (let i = 0; i < inputStr.length; i++) {
        
        if (inputStr[i] === inputStr[i].toUpperCase()) {
            
            swappedStr += inputStr[i].toLowerCase();
        } else {
        
            swappedStr += inputStr[i].toUpperCase();
        }
    }

    return swappedStr;
}

// Example usage:
const inputStr = 'jUMPED oVER tHE lAZY dOGS';
const outputStr = swapCase(inputStr);
console.log(outputStr);