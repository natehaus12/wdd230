fetch("example.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
  
const data = JSON.parse('{"firstName":"Nathan","lastName":"Hollingshaus","major":"Software Engineering","classCode1":"WDD230","credits1":"3", "classCode2":"WDD130","credits2":"2"}');

let fname = data.firstName
let lname = data.lastName
let major = data.major
var classCode1 = data.classCode1
let credits1 = data.credits1
let classCode2 = data.classCode2
let credits2 = data.credits2

// var stringCredit1 = JSON.stringify(credits1)
// var stringCredit2 = JSON.stringify(credits2)


var creditTotal = parseInt(credits1) + parseInt(credits2);
// var creditTotal = stringCredit1+stringCredit2;

document.getElementById("first-name").innerHTML = fname 
document.querySelector("#last-name").textContent = lname;

document.querySelector("#major").textContent = data.major;
document.querySelector("#class-code-1").textContent = data.classCode1;
document.querySelector("#class-code-2").textContent = data.classCode2;
document.querySelector("#credit-total").textContent = creditTotal;
