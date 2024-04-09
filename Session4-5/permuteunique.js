function permuteunique(nums){
    const result=[];
    nums.sort((a,b)=>a-b);//sort the array in acsending order to remove duplicates
    backTrack(nums,[],new Array(nums.length).fill(false),result);
    return result;
}
//nums = original array, tempList=temporary array where i am passing empty array
//used= one array created with false field, result is the resultant array
function backTrack(nums,tempList,used,result){
    if(tempList.length===nums.length){
        result.push([...tempList]);
    }else{
        for(let i=0;i<nums.length;i++){
            if(used[i] || (i>0 && nums[i]===nums[i-1] && !used[i-1])){
                continue; //skip duplicates
            }
            used[i]=true;
            tempList.push(nums[i]);
            backTrack(nums,tempList,used,result);
            used[i]=false;
            tempList.pop();
        }
    }
}

const array= [1,2,1];
console.log(permuteunique(array));