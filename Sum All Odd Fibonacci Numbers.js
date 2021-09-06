function sumFibs(num) {
    let fib = [1, 1];
    let oddFib = [1]

    // Iterates i through the Fibonacci numbers until num and asigns it the values
    for(let i = 1, k = 0; i <= num; k++, i += fib[k]) {

        // Adds the Fibonacci numbers to Fib to continue the iteration loop
        fib.push(i)
        
        // Adds the odd Fibonacci numbers to oddFib
        if (i % 2 == 1){
        oddFib.push(i);
        }
    }

    // iterates through oddFib and add all the numbers in the array
    return oddFib.reduce((acc,item) => {
        return acc + item;
    });
}