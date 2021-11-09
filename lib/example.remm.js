"use strict";

var _ref, _ref2, _nullishvar, _nullishvar2, _nullishvar3;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//company variable is  taking a object
var company = {
  peoples: 75,
  state: null,
  active: null
};
console.log(company.active);
company.active || (company.active = false);
console.log(company.active);
company.active || (company.active = true);
console.log(company.active);
company.peoples || (company.peoples = 200);
console.log(company.peoples);
company.state || (company.state = 'the company is busy');
console.log(company.state);
var company2 = {
  peoples: 0,
  state: 'the company is busy'
};
company2.peoples || (company2.peoples = 200);
console.log("company2.peoples " + company2.peoples);
company2.state || (company2.state = null);
console.log("company2.state  " + company2.state); //Logical AND assignment (&&=) 

var x = false;
var y = true;
var z = false;
var q = null;
console.log(x && (x = false));
console.log(x && (x = true));
console.log(y && (y = true));
console.log(y && (y = false));
x = x && (x = y);
console.log(" x " + x);
y = y && (y = q);
console.log(" y " + y);
q = q && (q = z);
console.log(" q " + q); //Logical nullish assignment (??=)
// preliminary information

var ab = "text";
var ba = null;
console.log((_ref = " ab ?? ba " + ab) !== null && _ref !== void 0 ? _ref : ba);
console.log((_ref2 = " ab ?? false " + ab) !== null && _ref2 !== void 0 ? _ref2 : false);
var nullishvar1 = true;
var nullishvar2 = false;
var nullishvar3 = null;
console.log(" nullish example 1 ", (_nullishvar = nullishvar1) !== null && _nullishvar !== void 0 ? _nullishvar : nullishvar1 = nullishvar2);
console.log(" nullish example 2 ", (_nullishvar2 = nullishvar3) !== null && _nullishvar2 !== void 0 ? _nullishvar2 : nullishvar3 = nullishvar1);
console.log(" nullish example 3 ", (_nullishvar3 = nullishvar2) !== null && _nullishvar3 !== void 0 ? _nullishvar3 : nullishvar2 = nullishvar3); //String.prototype.replaceAll

console.log('abbccc'.replace('b', 'd'));
console.log('aabcc'.replace('b', 'd'));
console.log('aabbcc'.replace(/b/g, '_'));
console.log('aaaabbbbcccc'.replaceAll('b', '_'));
console.log('aaaabc'.replaceAll('b', '$$'));
console.log('aaaabc'.replaceAll('a', function () {
  return '$$';
})); //Numeric separators  

var amount = 17800;
console.log(_typeof(amount)); //number

console.log(amount.toString());
var trillion = 1000000000000n;
console.log(_typeof(trillion)); //bigint

console.log(trillion.toString());