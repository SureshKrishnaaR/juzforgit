/*//Arrow functions!
const af1 = () => "Hello";
const af2 = (s1,s2) => s1+s2;
const af3 = val => val*val;
const af4 = (v,p) => Math.pow(v,p);

console.log(af1());
console.log(af2("Hello","World"));
console.log(af3(10));
console.log(af4(2,5));


console.log("-----------------------------");


for(var i = 0; i < 2; i++){
    var variable1 = 'hello';
    var variable1 = 'world';
    console.log(variable1);
    console.log(variable1);
}
console.log(variable1);

//Way 1 to create Objects

function Circle(radius){
    this.radius = radius;
}

Circle.prototype.Area = function(){
    return Math.PI*(Math.pow(this.radius,2));
}

var x = new Circle(10);
console.log(x);
console.log(x.Area());




//Way 2 to create Objects

var y = new Object();
y['fname'] = 'Suresh';
y['lname'] = 'Krishnaa';
console.log(y);




//Way 3 to create Objects

var z = {
    fname: 'Suresh',
    lname: 'Krishnaa'
};
console.log(z);




function fn1(a){
    var self = this;
    this.a = a;
    console.log(this);
    function fn2(){
        self.a = 10;
        console.log(self);
        console.log(self.a);
    }
    fn2();
    console.log(this.a);
}

var obj = new fn1(20);

*/

// function addNumber(number){
//     return function(x){
//         return number+x;
//     }
// }


// const addNumberCall = addNumber(7);
// console.log(addNumberCall(8));
// console.log(addNumberCall(6));


function callTheNumber() {
  function getAllNumbers(number) {
    return function() {
      return number;
    };
  }
  var arrToStore = [];
  for (var x = 0; x < 9; x++) {
    arrToStore[x] = getAllNumbers(x);
  }
  return arrToStore;
}

const callInnerFunctions = callTheNumber();
console.dir(callInnerFunctions);
console.log(callInnerFunctions[0]()); // 0
console.log(callInnerFunctions[1]()); // 1



//General Code
// var forh1 = document.querySelector('h1');
// var z = new Object();
// z.fname="Suresh";
// z.lname="Krishnaa";
// z.class = new Object();
// z.class.sec="A";
// console.log(z);
// console.log(z.class.sec); 
// forh1.onclick = function(){
//     var q = forh1.textContent;
//     if(q=="Hello VS code....!!"){
//         forh1.textContent="Javascript is magical!";
//     }
//     else{
//         forh1.textContent="Hello VS code....!!";
//     }
// }
//Objects concept
// var company = new Object();
// company.name="Monu company";
// company.ceo = new Object();
// company.ceo.firstname="Monu";
// company.ceo.age=19;
// company["$market stock"]="$15cr";
// console.log(company);
// console.log(company.name);
// console.log(company["ceo"]["firstname"]);
// var newcomp = {
//     name: "monu new comp",
//     ceo:{
//         firstname: "Monu",
//         age: 19
//     },
//     "$market stock": "$5cr"
// };
// console.log(newcomp);
//Functions
// function housemulti(mul){
//     var myfun = function(x){
//         console.log(mul,x);
//         return mul*x;
//     }
//     return myfun;
// }   
// var mul3 = housemulti(3);
// console.log(mul3(10));

// function doop(x, operation){
//     return operation(x);
// }
// var res = doop(10,mul3);
// console.log(res);
// $(document).ready(function(){
//      $(button).addClass("animated bounce");
//  });
// console.log("hello")