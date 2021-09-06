function steamrollArray(arr) {
    let result = [];
  
    flatArray(arr);
  
    function flatArray(arr){
      if(!Array.isArray(arr)){
        result.push(arr)
      } 
  
      else {
        arr.forEach(item => {
          flatArray(item);
        })
      }
    }
  
    return result;
  }