// // promises-a Promise represents a value that will be available now, later, or never (if something goes wrong)contructor function 
// state of promise
// 1. pending
// 2. fulfilled
// 3. rejected
// promise ko callback functionki requirement hoti h
// promises are smart organisation of callback functions

// promise is in pending state because we have not provided any callback function to it.
// promise is a constructor function which takes a callback function as an argument.
// the callback function takes two parameters, resolve and reject.
// resolve is a function which is used to change the state of promise from pending to fulfilled.
// reject is a function which is used to change the state of promise from pending to rejected.
let myPromise=new Promise((reslove,rejected)=>{          
    let data="this is data";
    if(data){
        reslove(data);
    }else{
        rejected("error");
    }
});
myPromise
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});

console.log(myPromise);

// fetch- returns promise (automatic promise dega)
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(responseObject=>responseObject.json()
).then(data=>console.log(data)) //return nhii kraa,data ko lock kr rha h,jo promise ko resolve krta h
.catch(error=>console.log(error))
