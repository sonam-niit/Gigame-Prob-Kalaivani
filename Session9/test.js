async function myfunction(){
    return "Hello World";
}

myfunction()
    .then(resp=>console.log(resp))

const promise= new Promise((resolve,reject)=>{
    resolve('Completed')
})