// // console.log("hello world")
//this code is for targetin the buttona nd changing on click 
// function handleClick(){
//    document.getElementById("btn").textContent="clicked" 
//    document.getElementById("btn").style.color="red"
// }


// //clicking the button will change the heading 
// function handleClick(){
//     const head = document.querySelector("h1");
//     head.style.color="tomato"
//     head.textContent="New heading"
// }

//q3 2 methods 
// function handleClick(){
//     const spanele=document.createElement("span").textContent="this is span";
//     const image=document.createElement("img")
//     image.setAttribute("src","https://www.krmangalam.edu.in/wp-content/uploads/2024/02/140bs_The-Exquisite-Campus-Life-at-K.R.-Mangalam-University-768x3491-1.webp")
//     image.setAttribute("alt","K.R Mangalam")
//     document.getElementById("content").append(spanele)
//     document.getElementById("content").append(image)
// }

//to target by event listener 
document.getElementById("btn").addEventListener("click",()=>{
    const spanele=document.createElement("span").textContent="this is span";
    const image=document.createElement("img")
    image.setAttribute("src","https://www.krmangalam.edu.in/wp-content/uploads/2024/02/140bs_The-Exquisite-Campus-Life-at-K.R.-Mangalam-University-768x3491-1.webp")
    image.setAttribute("alt","K.R Mangalam")
    document.getElementById("content").append(spanele)
    document.getElementById("content").append(image)
})