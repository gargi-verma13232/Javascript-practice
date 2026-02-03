// TASK 1: Profile Section Styling (ID) 
// Question 
// Select the section with id profile and: 
// 1. Change its background color to #f5f5f5 
// 2. Add padding 15px 
// 3. Center the text 

const heading=document.getElementById("profile");
console.log(heading);
heading.style.backgroundColor="lightpink";
heading.style.padding="30px";
heading.style.textAlign="center";

// ------------------------------------------------------------------------------------

// TASK 2: Highlight Important Text (ClassName) 
// Question 
// Select all elements with class important and: 
// 1. Change text color to red 
// 2. Increase font size 
// 3. Print total count in console 

const task=document.getElementsByClassName("important");
console.log(task);


for(let i=0;i<task.length;i++){
    if(i%2==0){
        task[i].style.color="orange"
    }
    else{
        task[i].style.color="lightgreen"
    }
    // task[i].style.color="blue"
    task[i].style.fontSize="40px"
}
console.log(task.length);

// ------------------------------------------------------------------------------------

const content=document.getElementById("content");
const task2=content.querySelectorAll("p");
for(let i=0;i<task2.length;i++){
    task2[i].style.backgroundColor="cyan"
}

