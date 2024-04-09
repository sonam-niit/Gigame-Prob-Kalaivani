const arr= [1,2,3,4,5,6,,7,8,9,10];

const filteredArray= arr.reduce((acc,cur)=>{
    if(cur%2==0){
        acc.push(cur);
    }
    return acc;
},[])
console.log(filteredArray);