//npm i axios
const axios= require('axios');

const fetchData=async ()=>{
    try {
        const resp= await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(resp.data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

fetch('https://jsonplaceholder.typicode.com/posts/',{
    method:'POST',
    body:{title:'',description:''},
    headers:{
        "content-type":'application/json',
    }
})

axios.post('https://jsonplaceholder.typicode.com/posts/',{title:'',description:''})