//aasynchronus progrrame==programme done one by one in step

// let a =prompt("what's your name")
// let b = prompt("what's your age")
// let c = prompt("color")
// document.write(a+" x "+b+" y "+c+" z ");


//synchronus progrrame=oposite to aasynchronus proggrame
// document.write("time-start");
// let av = setTimeout(
//     function  (){
// document.write("hello-ji");
//     },2000
// )
// document.write(av);
// console.log("time-end");



//function-normal
function great() {
    console.log("hi-ji");
}
great()

//arrow-function
let a = () =>{
    console.log("hello-ji");
}
a()


//arrow function= function-(function+function+keyword)

//use of arrow-function
let b = (count)=>{
    for(i=0;i<count;i++)
    console.log("aa rha hu");
}
b(3)
//one line arrrow function-
let c =(num)=> num+num;
console.log(c(3));














