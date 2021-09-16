module.exports = function countAllFromTown(regNo, town){
    const list = regNo.split(',');
  const fromTown = [];
    let count = 0;
    for(var i=0;i<list.length;i++){
      const currentRegNo = list[i].trim();
    if(currentRegNo.includes(town)==true){
    count++;
      
    }
   }
   console.log(count)
    return count
  }