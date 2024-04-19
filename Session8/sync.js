function f1(){
    console.log('Function 1');
}
function f2(){
    setTimeout(()=>{
        console.log('Function 2');
    },2000)
    
}
function f3(){
    console.log('Function 3');
}
function f4(){
    console.log('Function 4');
}
f1();
f2();
f3();
f4();