function swapElements(arr,index1,index2){

    if(index1<0 || index1>=arr.length || index2<0 || index2>=arr.length){
        throw new Error('Invalid Index')
    }

    arr[index1]= arr[index1]+arr[index2];
    arr[index2]= arr[index1]-arr[index2];
    arr[index1]= arr[index1]-arr[index2];

    return arr;
}

const array=[1,2,3,4,5,6];
console.log(swapElements(array.slice(),5,2));
console.log(array);