const createArrayWithLength=(length)=>{
    const newArray= Array(length).fill(0);
    return newArray;
}

console.log(createArrayWithLength(5));

const iniatializeArrayWithEmptySlots=(length)=>{
    return Array(length);
}
console.log(iniatializeArrayWithEmptySlots(6));
const iniatializeArrayWithEmptySlots1=(length)=>{
    const newArray=[];
    newArray.length=length;
    return newArray;
}
console.log(iniatializeArrayWithEmptySlots1(6));