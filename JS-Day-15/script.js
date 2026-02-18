fetch("https://jsonplaceholder.typicode.com/todos/5").then((response)=>console.log(response))
.then(response=>{
    console.log(response);
    if(!response.ok){
        throw new Error("Network response was not ok");
    }else{
        return response.json()
    }
})
.then(data=>console.log(data))



function getData(url){
fetch(url)
.then(response=>response.json())
.then(data=>console.log(data))
}
getData("https://jsonplaceholder.typicode.com/todos/5");



// you can use await only inside an async function
// agr function async h toh uske andar await use kr skte h,
// await promise ko resolve krne ka wait krta h,
// await ke baad wali line tabhi execute hoti h jab promise resolve ho jata h.
async function getData(url){
// fetch(url)
// .then(response=>response.json())
// .then(data=>console.log(data))
let response=await fetch(url);
let data=await response.json();
return data;
}
getData("https://jsonplaceholder.typicode.com/todos/5")
.then(data=>console.log(data))
// asyn function ko call krne par wo promise return krta h, toh uske baad .then() use kr skte h.
