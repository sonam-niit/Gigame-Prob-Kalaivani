const arr=[1,2,1,3,4,2,3,5];

const map= new Map();
for(let u of arr){
    if(map.has(u)){
        map.set(u,map.get(u)+1);
    }else{
        map.set(u,1);
    }
}
console.log(map);
let max={key:0,val:0};
for(let u of map){
    if(u[1]>max.val){
        max.key=u[0];
        max.val=u[1];
    }
}
console.log(max);