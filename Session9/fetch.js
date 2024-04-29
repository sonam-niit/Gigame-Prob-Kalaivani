const url='https://jsonplaceholder.typcode.com/users';

fetch(url)
    .then(resp=>resp.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    .finally(()=>console.log('task completed'))