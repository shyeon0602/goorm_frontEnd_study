let var1;

// var1 = 111;

// number -> string
var1 = String(111);

// boolean -> string
var1 = String(true);

// date -> string
var1 = String(new Date());

// array -> string
var1 = String([1, 2, 3, 4, 5]);

// toString()
var1 = (3).toString();

// string -> number
var1 = Number("1");

console.log(var1);
console.log(typeof var1);
