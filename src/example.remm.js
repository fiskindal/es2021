//company variable is  taking a object
const company = {peoples: 75, state: null, active: null };
console.log(company.active);
company.active ||= false;
console.log(company.active);

company.active ||=true;
console.log(company.active);

company.peoples ||= 200;
console.log(company.peoples);

company.state ||= 'the company is busy';
console.log(company.state);

const company2 = {peoples: 0, state: 'the company is busy'};
company2.peoples ||= 200;
console.log("company2.peoples " + company2.peoples);

company2.state ||= null;
console.log("company2.state  " + company2.state);



//Logical AND assignment (&&=) 
let x = false;
let y = true;
let z = false;
let q = null;

console.log(x &&= false);
console.log(x &&= true);
console.log(y &&= true);
console.log(y &&= false);

x = (x &&= y);
console.log(" x " + x);
y =  (y &&= q);
console.log(" y " + y);

q = (q &&= z);
console.log(" q " + q);


//Logical nullish assignment (??=)

// preliminary information
let ab = "text";
let ba =  null;

console.log(" ab ?? ba " + ab ?? ba);
console.log(" ab ?? false "+ab ?? false);


var nullishvar1 = true;
var nullishvar2 = false;
var nullishvar3 = null;

console.log(" nullish example 1 " , nullishvar1 ??= nullishvar2);
console.log(" nullish example 2 " ,nullishvar3 ??= nullishvar1);
console.log(" nullish example 3 " , nullishvar2 ??= nullishvar3);

//String.prototype.replaceAll
console.log('abbccc'.replace('b', 'd'));
console.log('aabcc'.replace('b','d'));
console.log('aabbcc'.replace(/b/g, '_'));
console.log('aaaabbbbcccc'.replaceAll('b', '_'));
console.log('aaaabc'.replaceAll('b', '$$'));
console.log('aaaabc'.replaceAll('a',() => '$$' ));

//Numeric separators  
const amount = 178_00; 
console.log(typeof amount); //number
console.log(amount.toString());
const trillion = 1000_000_000_000n;
console.log(typeof trillion);//bigint
console.log(trillion.toString());