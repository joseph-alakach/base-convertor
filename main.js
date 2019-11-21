const util=require("./convertor.js");
const reader=require('readline-sync');
let x = reader.question("enter the number you want to invert it to binary and hexadecimal: ")
console.log("the binary of "+x+" is: "+util.convertToBinary(x));
console.log("the Hexadecimal of "+x+" is: "+util.convertToHexa(x));