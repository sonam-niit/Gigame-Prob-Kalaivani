//npm i lodash (execute this in terminal)
const _ = require('lodash');

var books=[
    {title:'Book A',pages:120},
    {title:'Book B',pages:100},
    {title:'Book C',pages:200},
    {title:'Book D',pages:150},
]
//Binary Search
function binarySearchByTitle(array,target){
    const indexInsert= _.sortedIndexBy(array,{title:target},'title');
    return indexInsert;
}

var target="Book B";
console.log('Insert Index For: ',target,":",binarySearchByTitle(books,target));
