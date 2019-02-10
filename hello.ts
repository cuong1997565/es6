function greetPerson(name){
    let greet;
    if(name === "cuong"){
        greet = "Hello cuong";
    }else{
        greet = "Hi there";
    }
    console.log(greet);
}

greetPerson("cuong");


var a = 1;
var b = 2;
if(a === 1){
     var a = 10;
     let b = 20;
     console.log("a :", a);
     console.log("b :", b);
}
console.log(a);
console.log(b);

for(let i = 1; i <= 5; i++){
    setTimeout(function(){
        console.log("for :", i);
    },1000);
}