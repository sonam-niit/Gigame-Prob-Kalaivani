const map=new Map(); //empty map

//key value in map using set method

map.set('name','gigame');
map.set('age',3);
map.set('name','sonam soni');

console.log(map);

console.log(map.get('name'));
console.log(map.get('age'));
console.log(map.has('name'));
console.log(map.has('department'));

map.delete('name');
console.log(map);

for(let pair of map){
    console.log(pair[0],pair[1]);
}