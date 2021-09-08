function rot13(str) {
    str = str.split('');
  
    return str.map(item => {
      let code = item.charCodeAt();
  
      return (
        65 <= code && code <= 77 ? 
        String.fromCharCode(code+13) :
        78 <= code && code <= 90 ? 
        String.fromCharCode(code-13) : item);
      }
    ).join('');
}