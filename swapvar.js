// swap two variables using a third variable
var a = 5;
var b = 6;
var temp = a;
a = b;
b = temp;
console.log(a, b);

// swap two variables without using a third variable
var c = 20;
var d = 25;
c = c + d; // c now becomes 45
d = c - d; // d becomes 20
c = c - d; // c becomes 25
console.log(c, d);
