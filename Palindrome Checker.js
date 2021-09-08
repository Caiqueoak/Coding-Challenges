function palindrome(str) {
    let wordRev = '';
    let regex = /[a-z]+|[A-Z]+|[0-9]+/g;
    let word = str.match(regex).join('').toLowerCase();
  
    
    for(let i = word.length -1; i >= 0; i--) {
        wordRev += (word[i]);
    }
    return word == wordRev ? true : false;
}