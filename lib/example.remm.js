"use strict";

//company variable is  taking a object
var company = {
  peoples: 75,
  state: null
}; // company.peoples is full 

company.peoples || (company.peoples = 200);
console.log(company.peoples);
company.state || (company.state = 'the company is busy');
console.log(company.state);
var company2 = {
  peoples: 0,
  state: 'the company is busy'
};
company2.peoples || (company2.peoples = 200);
console.log(company2.peoples);
company2.state || (company2.state = null);
console.log(company2.state); //Logical AND assignment (&&=) 

var x = false;
var y = true;
console.log(x && (x = false));
console.log(x && (x = true));
console.log(y && (y = true));
console.log(y && (y = false));
var ab = "text";
var ba = null;
console.log(ab !== null && ab !== void 0 ? ab : ba); //Logical nullish assignment (??=)

function config(options) {
  var _options$peoples, _options$state;

  (_options$peoples = options.peoples) !== null && _options$peoples !== void 0 ? _options$peoples : options.peoples = 100;
  (_options$state = options.state) !== null && _options$state !== void 0 ? _options$state : options.state = '';
  return options;
}

console.log(config({
  peoples: 125
}));
console.log(config({}));
console.log(config(company)); //String.prototype.replaceAll

console.log('abbccc'.replace('b', 'd'));
console.log('aabcc'.replace('b', 'd'));
console.log('aabbcc'.replace(/b/g, '_'));
console.log('aaaabbbbcccc'.replaceAll('b', '_'));
console.log('abc'.replaceAll('b', '$$'));
console.log('abc'.replaceAll('a', function () {
  return '$$';
}));
var amount = 17800; // 00 after _ for cents.

console.log(amount.toString());
var trillion = 1000000000000n;
console.log(trillion.toString()); //Promise.any()

Promise.any([new Promise(function (resolve, reject) {
  return setTimeout(function () {
    return reject(new Error("ERROR!"));
  }, 100);
}), new Promise(function (resolve, reject) {
  return setTimeout(function () {
    return resolve(1);
  }, 200);
}), new Promise(function (resolve, reject) {
  return setTimeout(function () {
    return resolve(3);
  }, 300);
})]).then(console.log); // 1