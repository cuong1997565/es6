function greetPerson(name) {
    var greet;
    if (name === "cuong") {
        greet = "Hello cuong";
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("cuong");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log("a :", a);
    console.log("b :", b_1);
}
console.log(a);
console.log(b);
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log("for :", i);
    }, 1000);
};
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
