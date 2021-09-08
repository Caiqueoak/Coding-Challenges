function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let changeSum = 0;
  
    let changeObj = cid.reverse().map(coin => {
      switch(coin[0]){
        case 'ONE HUNDRED':
          var coinValue = 100;
          break;
        case 'TWENTY':
          var coinValue = 20;
          break;
        case 'TEN':
          var coinValue = 10;
          break;
        case 'FIVE':
          var coinValue = 5;
          break;
        case 'ONE':
          var coinValue = 1;
          break;
        case 'QUARTER':
          var coinValue = 0.25;
          break;
        case 'DIME':
          var coinValue = 0.1;
          break;
        case 'NICKEL':
          var coinValue = 0.05;
          break;
        case 'PENNY':
          var coinValue = 0.01;
          break;
      }
  
      let coinCidNum = Math.round(coin[1]/coinValue);
      let coinChangeNum = 0;
  
  
      for(let i = 1; i <= coinCidNum; i++) {
        let actualChangeSum = (i * coinValue/10 + changeSum/10)*10;
  
        if(actualChangeSum <= change){
            coinChangeNum++;
        } else break;
      }
  
      changeSum = (changeSum/10 + coinChangeNum*coinValue/10)*10;
  
      return changeSum > change ?
        [coin[0], 0] :
        [coin[0], coinChangeNum*coinValue];
    });
  
    changeSum = changeObj.reduce((acc, coin) => {
        return (coin[1]/10 + acc/10)*10;
    },0);
  
    let cidSum = cid.reduce((acc, coin) => {
        return coin[1] + acc;
    },0);
  
    return changeSum != change ?
    {
        status: 'INSUFFICIENT_FUNDS',
        change: [],
    }
    :   cidSum == change ?
    {
        status: "CLOSED", 
        change: cid.reverse(),
    } 
    : 
    {
        status: "OPEN", 
        change: changeObj.filter(coin => {
            return coin[1] != 0;
        }),
    };
}