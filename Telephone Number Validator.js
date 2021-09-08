function telephoneCheck(str) {
    let regex = /((1 ?)?(\(\d{3}\) ?|\d{3}(-| )?)((\d{10})|((\d{3}(-| )(\d{4})?)))|\d{10})/g;
  
    return (
      str.match(regex) != null ? 
      str.match(regex).join('') == str : false);
  }