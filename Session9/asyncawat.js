async function fetchData(){
    const url='https://jsonplaceholder.typcode.com/users';

    try {
        const resp= await fetch(url);
        const data= await resp.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();