 let user={
     name:"gargi",
     address:"gurgaon",
     mobileno:123456,
     favcolor:["black","blue"],
     demo:function(){
         return "demo";
     }
}
console.log("my name is"+user.name +"my fav color is"+user.favcolor[1], user.demo())


// // string literals
console.log(`my name is ${user.name}. my fav color is ${user.favcolor[1]}`)


// // object methods
// // 1.object.keys(variable name)
console.log(Object.keys(user));
// // 2.object.values(variable name)
console.log(Object.values(user));
// // 3.object.entries
console.log(Object.entries(user));

const car={
    make:"mahindra",
    model:"thar"
};
// 4.object.freeze(variable name)
Object.freeze(car) //in freeze we can't add a new key value also can't change or update the values
// 5.object.seal(variable name)
Object.seal(car)//in seal we cant add a new key value but we can change or update the values
car.model="XUV700";
car.color="black";
console.log(car)



