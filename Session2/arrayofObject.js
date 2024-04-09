const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9];

console.log([...arr1,...arr2]);
console.log(arr1.concat(arr2));

console.log([...arr1,78,90]);

const obj1={id:1,name:'sonam'};
const obj2={id:1,age:45}

console.log({...obj1,...obj2});