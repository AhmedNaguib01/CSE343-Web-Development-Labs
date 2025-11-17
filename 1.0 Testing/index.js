let array = [1, 2, 3, 4, 5];
console.log(array.length); // Output: 5
Math.floor(4.7); // Output: 4
var a = Array(20);
for (let i = 0; i < a.length; i++) {
    a[i] = i * 2;
}

Math.pow(2, 3); // Output: 8

var x = 10;
function testScope() {
  let z = 20;
  console.log('Value of z is ' + z);
}

// difference between let array = [] and var array = [] and var array = new Array() and var array = Array()
let array1 = [];
var array2 = [];
var array3 = new Array();
var array4 = Array();
// array1, array2, array3, and array4 are all empty arrays

let strUsername = "Ahmed Alaa";
var length = strUsername.length;
console.log("Length of strUsername is: " + length); // Output: Length of strUsername is: 10

var now = new Date();
var hour = now.getHours();
console.log("Current hour is: " + hour);
console.log("Current date and time is: " + now);

const arr = [10, 20];

arr[5] = "Hello";
console.log(arr[5]); // Output: Hello
console.log(arr.length); // Output: 6
console.log(arr); // Output: [ 10, 20, <3 empty items>, 'Hello' ]

if(x) {
  console.log("welcome")
}

var x = "2";
console.log(parseInt(x)); // Output: 2
