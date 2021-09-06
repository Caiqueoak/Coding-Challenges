function sumPrimes(num) {
    // Array storing the prime values
    let primesArr = [];
  
    // Loop to iterate through num
    for(let i = 2; i <= num; i++) {

        // Returns true if the remainder of i by every primesArr value is diffent from 0
        let boolean = primesArr.every(prime => {
            return i % prime != 0;
        })

        /* Adds the i value (prime) that passed the 'every' method to the PrimesArr, 
        updating it through the loop */
        if(boolean){
            primesArr.push(i);
        } 
    }
    // Returns the sum of all primes till num
    return primesArr.reduce((acc, value) => {
        return acc + value;
    });
}