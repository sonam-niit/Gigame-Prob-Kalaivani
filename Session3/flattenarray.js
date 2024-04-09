const flattenarray=(arr)=>{

    let result=[];
    arr.forEach(element => {
        if(Array.isArray(element)){
            result= result.concat(flattenarray(element));
        }else{
            result.push(element);
        }
    });
    return result;
}

// console.log(flattenarray([1,[2,[3,4],4],5],6));
console.log(flattenarray([1,[2,3],'Hello',[4,[5,6]]]));