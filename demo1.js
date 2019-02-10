// let num1;
// const num2 = 10;
// const object = {
//     name : "Joatmin"
// }
// console.log(object.name);
// object.name = "Cuong";
// console.log("demo :", object.name);
////////////////////////
// var getRegvalue = function(){
//     return 10;
// }
// console.log(getRegvalue());
// const getArrowvalue = (m, bonus) => 10 * m * bonus;
// console.log(getArrowvalue(5,10));
// console.log(typeof getArrowvalue);
///////////////////////
//lexical this
var employee = {
    id: 1,
    greet: function () {
        var c = this;
        setTimeout(function () {
            console.log(c.id);
        }, 1000);
    }
};
employee.greet();
