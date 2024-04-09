const arr=[1,2,1,3,4,2,3,5];

const set= new Set(arr); //this removes duplicated
console.log([...set]); //converting into array //ES6
console.log(Array.from(set)); //converting into array //ES5

const uniqueArr= []; //[1,2]
var numObj={} ; //object having key which is 1?
for(let i=0;i<arr.length;i++){
    var currNum=arr[i]; //2
    if(!numObj[currNum]){
        uniqueArr.push(currNum);
        numObj[currNum]=true;
    }
}

console.log(uniqueArr);
