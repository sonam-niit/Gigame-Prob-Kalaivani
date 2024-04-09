const arr=[1,2,1,3,4,2,3,5];
const findUniqueNumbers=(arr)=>{
    const freqMap={};
    for(let d of arr){
        freqMap[d]= (freqMap[d] || 0 )+1;
    }
    console.log(freqMap);

    const uniqueNumbers=[];
    for(let m in freqMap){
        if(freqMap[m]===1){
            uniqueNumbers.push(m)
        }
    }
    console.log(uniqueNumbers);
}
findUniqueNumbers(arr);