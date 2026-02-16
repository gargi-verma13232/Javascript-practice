// console.log("start.......");

// function myFunction (){
//     setTimeout(() => {
//         console.log("hello world");
//     }, 5000)
// }
    
// myFunction();
// console.log("end.......")
// // settimeout runs asynchronous
// // return statement does'nt run asynchronous, it runs synchronously.
// // why do we asynchronous coding?



// console.log("start.......");
// function myFunction (cb){
//     setTimeout(() => {
//     cb("hello world");
//     }, 5000)
// }
    
// myFunction((data)=>{
//     console.log(data);
// });
// console.log("end.......")
// // what is callback function?
// // passing a function as an argument to another function is called callback function.
// // here myFunction is higher order function and the function we are passing is callback function.

console.log("start.......");

function login(uname, password, cb) {
    setTimeout(() => {
        cb({ uname, isLoggesIn: true, message: "login successful" });
    }, 1000);
}

function getVideos(email, cb) {
    setTimeout(() => {
        cb([{ title: "video1" }, { title: "video2" }]);
    }, 2000);
}

function getVideoDetails(video, cb) {
    setTimeout(() => {
        cb({ title: video.title, description: "This is a video about "+video.title });
    }, 2000);
}
login("john@gmail.com", "password123", (userdata) => {
    console.log(userdata);
    getVideoslst(userdata.uname, (videolst) => {
        console.log(videolst);
        getVideoDetails(videolst[0], (videoDetails) => {
            console.log(videoDetails);
        });
    });
});
console.log("end.......")
// pyramidal of doom-callback


