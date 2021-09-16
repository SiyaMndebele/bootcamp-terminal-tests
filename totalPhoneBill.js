module.exports = function totalPhoneBill(itemString){
    const sent = itemString.split(',')
    let total = 0;
      for(var i=0;i<sent.length;i++){
      const cost = sent[i].trim();
        if (cost.includes('call')){
        total += 2.75
        }
        else if (cost.includes('sms')){
        total += 0.65
        }
        console.log(total);
        
      }
      return 'R' + total.toFixed(2);
    }