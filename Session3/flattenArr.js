const flattenarray=(arr)=>{

    const result=[];
    const stack=[arr]; //passing a full array in array of stack

    while(stack.length>0){
        const current= stack.pop();
        if(Array.isArray(current)){
            for(let i=current.length-1;i>=0;i--){
                stack.push(current[i])
            }
        }else{
            result.push(current);
        }
    }
    return result;
}

console.log(flattenarray([1,[2,[3,4],5],6]));