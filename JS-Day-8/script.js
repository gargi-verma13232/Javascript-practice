// DOM Traversal
// a. DOM Traversal Methods
// 1. getElementById(id)--Retrieves an element with the specified id attribute

const heading=document.getElementById("myHeading");
console.log(heading);
heading.textContent="hello india"
heading.style.color="tomato";
heading.style.backgroundColor="yellow";


const para=document.getElementsByClassName("para");
console.log(para);
for(let i=0;i<para.length;i++){
    para[1].style.backgroundColor="cyan";
}
// const para=document.getElementsByClassName("para");
// para.style.backgroundColor="cyan"; ////will not work as it returns HTMLCollection


// 2.querySelector(selector)--Returns the first element that matches a specified CSS selector(s) in the document.
const qs=document.querySelector("#content p");
console.log(qs);
qs.textContent="This is modified paragraph using querySelector";
