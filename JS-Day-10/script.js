// console.log("hello world!");
// we can create html element from javascript using create
// new assignment will be started in the class now , event calander / tracker and dom manipulation bhi se hoga 
//todo bhi banaenge 
//create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent="this is a dynamically created paragraph";
console.log(newParagraph);

//append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);
//target element by query selctor and then remove varna sab remove hojaega 
//two ways to remove , one by creating const or else do it directly.
// const rev = document.querySelector("#container p");
// rev.remove();

// or you can do this too 
document.querySelector("#container p").remove();


//creating a dynamic image tag in the page with javascript
const image =document.createElement("img");

image.setAttribute("src","https://www.krmangalam.edu.in/wp-content/uploads/2024/02/140bs_The-Exquisite-Campus-Life-at-K.R.-Mangalam-University-768x3491-1.webp")
image.setAttribute("alt","K.R Mangalam")

const gallery=document.getElementById("gallery");
gallery.appendChild(image);

//Date method
let date=new Date()
console.log(date);

setInterval(()=>{
 let date=new Date()
console.log(date);
},1000)

let hour=date.getHours();
let min=date.getMinutes();
let srcond=getSeconds();

letclock = document.getElementById("digiclock");