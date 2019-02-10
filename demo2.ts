// let displayColors = function(message,...colors){
//     console.log(message);
//     console.log(colors);
//     for(let i in arguments){
//         console.log(arguments[i]);
//     }
// }

// let message = "List of colors :";
// let colorArray = ['Orange','Yellow','Indigo'];
// displayColors(message, ...colorArray);
// // displayColors(message, "Red");
// // displayColors(message,"Red", "Blue");
// // displayColors(message,"Red", "Blue", "Green");

////////////////////////////////////
// let firstname = "Chandler";
// let lastname  = "Bing";

// let person = {
//     firstname : firstname,
//     lastname  : lastname
// };
// console.log(person.firstname);
// console.log(person.lastname);
//////////////////////////////////
// function createPerson(firstname, lastname, age){
//        let fullname = firstname + " " + lastname;
//        return {
//             firstname, 
//             lastname, 
//             fullname,
//             isSenior: function(){
//                 return age > 20;
//             }
//         };
// }
// let p = createPerson("Ross", "Geller",30);
// console.log(p.firstname);
// console.log(p.lastname);
// console.log(p.fullname);
// console.log(p.isSenior());
///////////////////////////////////////////
// let ln = "last name";
// let person = {
//     "first name" : "Chandler",
//     [ln] : "Bing"
// };
// console.log(person);
//////////////////////////////
// let c = ["Chandler","Bing","Male"];
// let [fname, lname, gender] = c;
// console.log(fname);
// console.log(lname);
// console.log(gender);

//////////////////////
let c = {
    fname  : "Chanlder",
    lname  : "Bing",
    gender : "Male"
};

let { fname: f, lname: l, gender: g } = c;
console.log(f);