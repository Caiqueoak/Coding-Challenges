function convertToRoman(num) {
  let romanNums = [
  ['M', 1000],['D', 500],['C', 100],['L', 50],['X', 10],['V', 5],['I', 1]
  ];

  let result = '';

  for(let i = 1000; i >= 1; i/=10) {
    let quotient = num / i;

    if(quotient >= 1) {
      var value = Math.trunc(quotient) * i;
      num -= value;
    }

    for(let k = 0; value > 0; k++){
      let repetition = Math.trunc(value / romanNums[k][1]);
      let remainder = value - romanNums[k][1];

      switch(repetition) {
        case 1:
          result += romanNums[k][0];
          value -= romanNums[k][1] * repetition;
          break;
        case 2:
          result += romanNums[k][0].repeat(2);
          value -= romanNums[k][1] * repetition;
          break;
        case 3:
          result += romanNums[k][0].repeat(3);
          value -= romanNums[k][1] * repetition;
          break;
      }
    
      if(value <= 0) {
        break;
      }

      switch(remainder) {
        case 0:
          result += romanNums[k][0];
          value -= romanNums[k][1];
          break;
        case -1:
          result += 'I' + romanNums[k][0];
          value -= romanNums[k][1] - 1;
          break;
        case -10:
          result += 'X' + romanNums[k][0];
          value -= romanNums[k][1] - 3;
          break;
        case -100:
          result += 'C' + romanNums[k][0];
          value -= romanNums[k][1] - 3;
          break;
      }
    }
  }
  return result;
}