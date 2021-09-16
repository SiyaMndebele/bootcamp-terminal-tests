module.exports = function countAllPaarl(regNo){
    const list = regNo.split(',');
  const paarl = [];
    var count = 0
    for(var i=0;i<list.length;i++){
      const paarlReg = list[i].trim();
    if(paarlReg.startsWith('CJ')==true){
    count++;
      //return count;
    }
   }
   console.log(count)
    return count
  }