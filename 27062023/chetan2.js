//browser events
let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
document.write("hello-world")
a.innerHTML="hello-world"
//both works in that case
}


let b = document.getElementsByClassName("container2")[0]
b.onclick = () => {
for(i=0;i<20;i++){

    document.write("i am "+i+ " number"+"<hr>");
  //console.log not work in that case
    
}}


// Btn.addEventListener('click',function () {
// console.log("ikonn");    

// })














