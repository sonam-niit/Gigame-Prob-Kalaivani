Array.prototype.swap=function (index1,index2){
    var temp= this[index1];
    this[index1]=this[index2];
    this[index2]=temp;
    return this;
}
const array=[1,2,3,4,5,6];
array.swap(2,5); //my own prototype
console.log(array);