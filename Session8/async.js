let data=[]
function fetchData(cb){

    setTimeout(()=>{
        data=[1,2,4,5,7,8,9,45,6,7];
        console.log('Data Fetched successfully');
        cb();
    },3000)
}
function display(){
    console.log('Data Display',data);
}
fetchData(display);