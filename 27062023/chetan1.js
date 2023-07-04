dde//let const var
const ampp = {
    name: "chetanoyal",
    clas:"12",
    subj: "bio",
}
//expression
console.log(ampp);
let aq = 12;
let aw = "12";
let w = aq+aw
console.log(aq+aw);
console.log(w);
console.log(aq===aw);
console.log(aq!==aw);
console.log(aq==aw);
console.log(aq!=aw);
let x = 45;
let y = 34;
console.log(x>32 && y<45);
console.log(x>32 || y<22);

//else if statement

let cg = prompt("enter text here")
cg = Number.parseInt(cg)
if(cg==0){
    console.log("pls enter number here");
}
else if(cg<=18){
console.log("you are under age still you are not eligible now you shout try after 18 welcome");
}
else{
    console.log("pls enter right key here (use only numbers)");
}


//direct method of else and if method
let age = prompt("enter number here")
age= Number.parseInt(age)
console.log("you can"+(age<18? "not-drive":"drive"));

//switch statement
let am =prompt("enter number here")
switch (am) {
    case '12':
        console.log("your age is 12");
                break;
    case '13':
        console.log("your age is 13");
                break;
    case '14':
        console.log("your age is 14");
                break;
    case '15':
        console.log("your age is 15");
                break;

    default:
        console.log("your agr is not special case pls try our new in new progrrame link griven at our website");
        break;
}


//loop statement

//for loop object(obj)
for(i=0;i<20;i++){
    console.log(i);
}
//
let au = {
    namee: "agrwal",
    clsk : "mca",
    result : 20,
    resul : 20,
    resut : 20,

}
for(let i =0; i<Object.keys(au).length;i++)
//use one by one only one will be work low  code bw two
console.log(Object.keys(au)[i]);
console.log(au[Object.keys(au)[i]]);

//for in loop obj
let ax = {
    namee: "agrwal",
    clsk : "mca",
    result : 20,
    resul : 20,
    resut : 20,

}
for(let a in ax){
    console.log(ax);
}

//for in loop use in a  also in a string(done)and provide loop complete object in loop
let axm = "chetan"
for(let a in ax){
    console.log(ax);
}

//for of loop(not done) and provide all element inside the object 
let bh = "chetan"
for(let ab of bh){
    console.log(ab);
}
//for of lopp use in obj
let ak = {
    namee: "agrwal",
    clsk : "mca",
    result : 20,
    resul : 20,
    resut : 20,

}
for(let ab of ak){
    console.log(ab);
}
// for of loop use in a array(done)


let at =["chetan","aman","shivam"]

for(let ab of at){
    console.log(ab);
}


//while loop using
let vb = prompt("enetr number here")
vb = Number.parseInt(vb)
i = 0;
while (i<vb) {
    console.log(i);
    i++
    
}


//do while loop using
let vc = prompt("enter number here")
vc=  Number.parseInt(vc)
i=0;
do{
    console.log(i);
    i++
}while (i<vc)



//function-create-New Way

const sum=(ah,ad)=> {
    return ah+ad
}

let ah = 44;
let ad = 34;

console.log(sum(ah,ad));

//7 primitive datatype of javascript

let na = 22;
console.log(typeof na);

let nb = true;
console.log(typeof nb);

let nc = undefined;
console.log(typeof nc);

let nd = "chetan";
console.log(typeof nj);


let gy = BigInt(9709707090);
console.log(typeof gy);


//string-chpater-4
let wa= "chetan"
console.log( typeof wa);
console.log(wa);

let wb =`8778879""""89hf%jjj`
console.log(typeof wb);
console.log(wb);

//string interpolation= we can insert variable directly in template literal in javascript k/a string interpolation

let akpp= 45;
console.log("this is"+akpp);

let name = "chetan"
let oi= `this is ${name}`
console.log(oi);

//how use symboll in javascript string ( confusing like literals )
let fop = `chetanok bro`
console.log(fop);
//if we use symboll like literal they are confusing for javascript but $ like sign we don't need use escape     sequence charchter\\\
let fg = `chetan\`ok bro`
console.log(fg);




//string properties/mthods("create all new string")
let uyt = "   chetAn"
let iur=uyt.toUpperCase()
console.log(iur);

let iop=uyt.toLowerCase()
console.log(iop);

let nu= uyt.length
console.log(nu);

let rr = uyt.slice(1,3)
console.log(rr);

let tt = uyt.replace("he","ta")
console.log(tt);

let yy = uyt.trim()
console.log(yy);
console.log(typeof yy);
console.log(yy);
//helping in remoes the whites spaces around the double score

let nj = "aman dhattarwal"
console.log(nj);


//arrays(chapte-5)
//basic of array
const vs = ["chetan","aman","piyush"]
console.log(vs);
console.log(vs.length);
console.log(vs[1]);


//correction in arrays directly
const va = ["chetan","aman","piyush"]
va[1]= "pulkit"
console.log(va);
console.log(va.length);
console.log(typeof va);

//arrays methods
const vac = ["chetan","aman","piyush",89,65]
const df = vac.toString()
console.log(typeof df);

vac.splice(1,2,42,42)
console.log(vac);

const hu=vac.join(9928998081)
console.log(hu);


const xa = ["chetan","aman","piyush"]
const rb=xa.concat("aman")
console.log(rb);

const rtu =xa.pop()
console.log(rtu);
//{pop , string-convert , join , concat, slice} method need new array
//[shift ,unshift,push,delete,splice,sort] not need create a new array
const xaa = ["chetan","aman","piyush"]
xaa.push("amannnn")
console.log(xaa);

xaa.shift()
console.log(xaa);

xaa.unshift("rammm")
console.log(xaa);

const xpa = ["chetan","aman","piyush","hvjv","ahjhjv"]
delete xpa[1]
console.log(xpa);
xpa.sort()
console.log(xpa);
xpa.reverse()
//write complete code reverse alphabatically
console.log(xpa);
const hs =xpa.slice(2)
console.log(hs);



const c=(a,b)=>{
return a+b}
let a = 456;
let b = 7897;
console.log(c(a,b));

//function using by dsa concept of numbers reverse
const num=0
function rec(a) {
    while(a!=0){
        const c=a%10;
        num = num*10+c;
        a=a/10;
    }
    return num;
}
const number = rec(798);
console.log(number);

//loop method in array
//map provide feature to do something with each value of array/object
let ged = [2,4,6,9]
let gp=geed.map(x=>{
    return x*2
})
console.log(gp);

//map provide feature to do something with each value of array/object = ans in always true or false when we apply cndn(create a new array)
let geed = [2,4,6,9]
let gpp=geed.map(x=>{
    return x%2==0
})
console.log(gpp);

//filter provide feature to find like filter inside the array(create a new array)
let vn=[3,6,4]
let gf=vn.filter(x=>{
    return x%2==0
})
console.log(gf);

//for-each create not-new array but map not create a new array
let gyu=[3,5,2,54,21]
let fjdj=gyu.forEach(k=>{
   console.log(k*2);
    
})

//map m agr two point lenge a and b then a behave like elements and also b behave like element number
let po=[93,787,363,571,682]
let pi=po.map((a,b)=>{
    return a*b
})
console.log(pi);



let fh=[93,787,363,571,682]
let jf=fh.reduce((a,b)=>{
    return a+b
})
console.log(jf);
console.log(typeof fh);


//array in for-in loop 
for(let ak in fh ){
    console.log(fh);
}

//array in for-of loop
for (const akk of fh) {
    console.log(akk);
}


console.assert(6<10)
//result is undefiened  means right conditiion

console.assert(6<10)
//assertion failed means condition failed


let dff={
    nam: "aman",
    oppp: "jgkjb",
    ppppp: "aman",
    bkjk: "aman",
}
console.table(dff)

console.log(console);
console.info("this is an information")
console.error("this is an error")


//javascript core is 
window.console.log("chetan")
//right because window is global object


//WALKING THE DOM
document.body.getElementsByClassName("text-purple-700 dark:text-purple-600")[1].style.background="pink"
//childNodes=all child nodes
//firstchild
//firstelementchild
//lastchild
//lastelelmentchild

//
//child  node to convert node list in a array
let rj="chetan"
console.log(typeof rj);
let uo=Array.from(rj)
console.log(uo);
console.log(typeof uo);

let yh= Array.from(document.body.childNodes)
console.log(typeof yh);
console.log(yh);

// let rgh=document.body.getElementsByClassName("text-purple-700 dark:text-purple-600")

document.body.firstElementChild
//for selecting given class or id all elements
document.body.querySelectorAll(".header-nav-div")

//for selection first class or id in all of same classesand also in id's
document.body.querySelector(".header-nav-div")

//Searching the dom 
document.body.getElementsByClassName
document.body.getElementsByTagName
document.body.getElementsByName


let gyuo="bbjkbjk"
console.log(typeof gyuo);
console.dir(typeof gyuo)


let key={
    nam:"aman",
    kam:"ok"

}
console.log(key);
//console.log shows the element DOM tree

console.dir(key);
//console.dir shows the element as an object
console.log(typeof key);
console.dir(typeof key);

document.body.firstChild.nodeName
//provide text comment and tags etc
document.body.firstChild.getElementsByTagName
//provide  only tags not comments and text node etc.
document.body.firstElementChild.nodeName
//behave like a tag node node because we set a property of element in our code tha's we it behave like a simmilar to the tag name


//inner html 
document.getElementById("oip").innerHTML
//inner html provide information  inside the tag
document.getElementById("oip").outerHTML
//outer html provide information complete tag

document.body.textContent
//provide complete website in a text form so that we can copy very easily

//hidden property provide feature of hiiden the content 
///check html file in id opk 


// attributs method

//representation=====id.attributs("")

//get attributs=
let  ab= oip.getAttribute("class")
console.log(ab);
//has attribute
let rto=raman.hasAttribute("class")
console.log(rto);
//set attributes
let dog=raman.setAttribute("class","jau")
console.log(dog);
//remove attributes
let cry=raman.removeAttribute("id")
console.log(cry);
//method to collection get all attributes
let fgi =document.body.attributes
console.log(fgi);

//insrtion method
 //old method
 let guru= document.body.getElementsByClassName("yut")[0]
 guru.innerHTML=guru.innerHTML+ `<h1>bhjgdjvsjdjsdjds</h1>`
console.log(guru.innerHTML);

let gb = document.getElementById("__next")
gb.innerHTML=gb.innerHTML+<h1>bhjgdjvsjdjsdjds</h1>
console.log(gb.innerHTML);
//but only in that case we can add tag but if we want to addd the class then we should use j.s. attribute method
//but this is classical method

//new method for insertion

//appendChild
let gb = document.getElementById("__next")
//use id
let dc=document.createElement("dc")
dc.innerHTML=`<h1>hello world</h1>`
gb.append(dc)

//prepend child
let gb = document.getElementById("__next")
let rs=document.createElement("rs")
rs.innerHTML=`<div>aa rha hu ..</div>`
gb.prepend(rs)


//before
let gb = document.getElementById("__next")
let fgh=document.createElement("fgh")
fgh.innerHTML=`<h1>ok budy</h1>`
gb.before(fgh)

//after
let gb = document.getElementById("__next")
let bhg=document.createElement("bhg")
bhg.innerHTML=`<h1>END</h1>`
gb.after(bhg)

//replace-with
let gb = document.getElementById("__next")
let bhg=document.createElement("bhg")
bhg.innerHTML=`<h1>ND</h1>`
gb.replaceWith(bhg)

//insert adjacement
//id.insertadjacementHTML/Text/Element(`beforebegin`,`vhjvhj`);

//insetadjacement html
const h = document.getElementById("abc");
let html = "<p>My new paragraph.</p>";
h.insertAdjacentHTML(`beforebegin`,html);

//insert adjacement text
console.time()
const ca=document.getElementById("abc")
let text="hjghjgjhj"
ca.insertAdjacentText(`beforebegin`,text)
console.timeEnd()
//beforebegin/beforeend/afterbegin/afterend

//id.remove()  this is a function for removing id
abc.remove()

//get time of any code run
console.time()
for(i=0;i<20;i++){
    console.log(i);
}
console.timeEnd()


//classList and className use for changes in any element class in correction


//to add name of the class
id.className="jgjh,vvhj,hhj"
//to get the list of class
id.classList

id.classList.remove("jgjh")

id.classList.add("hy")

id.classList.toggle("class")
//agr class lagi hai to is name ki hta dega or class hti hai to laga dega

id.classList.contains("class")
//ans is true or false if class is present in that lement then print true otherwise false



//function create 1st type
let ajgj =(a,b)=>{
    return a+b
}

//function create 2nd type
function kjhkjhk() {
    console.log("jjiii");
}
kjhkjhk()

//function-3rd type
setTimeout (function () {
    alert("hvjvjvj")
},5000)

//uper and niche bala same hai

let hyt=setTimeout(
    function (){
        alert ("kxbkvbskc")
    },2000)

console.log(hyt);
//alert aayega display pr 5sec badme

let hyyt=setTimeout(
    function (){
        alert ("kxbkvbskc")
    },2000)
clearTimeout(hyyt)
console.log(hyyt);
//clear timeout se 5 sec badme alert not displayed

let ut=setTimeout(
    function (){
        alert ("kxbkvbskc")
    },2000)
let bop=prompt("do do want to alert")
if (bop=="no") {
    clearTimeout(ut)
}
console.log(ut);


let rat=(a,b)=>{
    console.log("yes i am running"+(a+b));
    
}
setTimeout(rat,2000,1,2)

//cleartimeout m id dalne se timout function not work(niche-bale-code ke liye)
clearTimeout(16)


//

//setinterval pr itne sec bad code again and again return krta rhega
let raat=(a,b)=>{
    console.log("yes i am running"+(a+b));
    
}
setInterval(raat,2000,1,2)

clearTimeout(1)





//loop for printing no. with dailogues
for(i=0;i<20;i++){
    console.log("this is "+i+" value");
}


