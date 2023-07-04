//structure of call back function
function greet(name,callback) {
    console.log("hi"+name);
    callback();
}

//callback function  hai then
function callme() {
    console.log('i ama callback function ');
}
//passing function as a argument
greet("chetan",callme)


//method-1
const calculate=(a,b,operation)=>{
return operation(a,b)
}
const result=calculate(3,4,function (num1,num2) {
    return num1+num2
})
console.log(result);
//there are operation are a function
//method

const subtraction = (a,b)=> a-b;
let g=calculate(8,3,subtraction)
console.log(g);

//types=find and findIndex and these are also the calback function
const x=[2,5,3,9,6,-5,-8,-3];
const sd=(num)=>{
    return num<0;
}
 let fg=x.find(sd)
 let fgh=x.findIndex(sd)
console.log(fg);
console.log(fgh);


//foreach
x.forEach((g)=>{
    console.log("this is"+g);
})



