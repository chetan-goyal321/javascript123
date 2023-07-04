function getcheese() {
    setTimeout(() => {
        const cheese="🧀";
console.log(cheese);
    }, 2000);
}
getcheese()

//method of create a promise to save tha callback hell
const ticket= new Promise(function (resolve,reject) {
    // const isBoarded=true;
    const isBoarded=false;
    if(isBoarded){
        resolve("you are good to go")
    }
    else{
        reject("your flight has been cancelled ")
    }
})


ticket
.then((data)=>{
console.log("wohoo"+data);
})
.catch((data)=>{
    console.log("sorry"+data);
})
.finally(()=>{
    console.log("i will be always excecuted");
})


//promise inside insert the settimeout
function gotcheese() {
    const hy=new Promise((resolve,reject)=>{
setTimeout(() => {
    const cheese= "cheese"
    console.log(cheese);
    resolve(cheese)
}, 2000);

    })
}
console.log(gotcheese());


//how to make pizza😂😀😀😀😀😀😀😀
//step-1
function gotcheese() {
   return new Promise((resolve,reject)=>{
setTimeout(() => {
    const cheese= " cheese 🧀🧀🧀🧀"
    // console.log(cheese);
    resolve(cheese)
}, 2000);

    })
}

function makedough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const dough="dough 🍰🍰🍰🍰"
        resolve(dough)
        }, 2000);
    })
}

function makepizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza=" pizza 🍕🍕🍕🍕"
            resolve(pizza)
        }, 2000);
    })
}

function timees(pizza) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const times=" it will take only for 2 minutes only"
            resolve(times)
        }, 2000);
    })
}

function readdy(timees) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ready=" readied broooooo👌👌👌👌 (you can takeaway your order to our outlet) "
            resolve(ready)
        }, 2000);
    })
}


// step-2-method-1
gotcheese()
.then((cheese)=>{
console.log("we got"+cheese);
return makedough(cheese)
})

.then((dough)=>{
    console.log("we got "+dough);
    return makepizza (dough)
})

.then((pizza)=>{
    console.log("we got"+pizza);
    return timees(pizza)
})

.then((timees)=>{
    console.log(timees);
    return ready(timees)
})

.then((ready)=>{
    console.log(ready);
   
})

.catch((data)=>{
    console.log("error occured"+data);

})
.finally(()=>{
    console.log("here is the ready pizza for serving pls take it from the counter 😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀");
})


// step-2-method-2
async function orderpizza() {
    try{
const cheese = await gotcheese();
console.log("we got"+cheese);

const dough = await makedough();
console.log("we got"+dough);

const pizza = await makepizza();
console.log("we got"+pizza);

const times = await timees();
console.log("we got"+times);

const ready = await readdy();
console.log("we got"+ready);

    }catch(err){
        console.log("here are error occured"+err);
    }
    console.log("proccess ended");
 }
orderpizza()

//catch-block jrur dale both condition otherwise it will  show the error



//method-3
let a=  new Promise((resolve,reject)=>{
 setTimeout(() => {
     const cheese= " cheese 🧀🧀🧀🧀"
     // console.log(cheese);
     resolve(cheese)
 }, 2000);
 
     })
 
 
let b=  new Promise((resolve, reject) => {
         setTimeout(() => {
         const dough="dough 🍰🍰🍰🍰"
         resolve(dough)
         }, 2000);
     })
 

Promise.all([a,b]).then((result)=>{
    console.log(`result:${result}`);
})















