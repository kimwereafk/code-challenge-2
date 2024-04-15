function generateArray(start, end) {
    let array = [];
    
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            array.push(i);
        }
    }
    
    return array;
}


console.log(generateArray(4, 9));
console.log(generateArray(-4, 9)); 
