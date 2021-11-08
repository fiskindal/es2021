//company variable is  taking a object
const company = {peoples: 75, state: null};



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


console.log(x &&= false);
console.log(x &&= true);
console.log(y &&= true);
console.log(y &&= false);

let ab = "text";
let ba =  null;

console.log(ab ?? ba);


//Logical nullish assignment (??=)
function config(options) {
  options.peoples ??= 100;
  options.state ??= '';
  return options;
}
console.log(config({ peoples: 125}));
console.log(config({}));
console.log(config(company));



//String.prototype.replaceAll
console.log('abbccc'.replace('b', 'd'));
console.log('aabcc'.replace('b','d'));
console.log('aabbcc'.replace(/b/g, '_'));
console.log('aaaabbbbcccc'.replaceAll('b', '_'));
console.log('abc'.replaceAll('b', '$$'));
console.log('abc'.replaceAll('a',() => '$$' ));


const amount = 178_00; // 00 after _ for cents.
console.log(amount.toString());
const trillion = 1000_000_000_000n;
console.log(trillion.toString());


//Promise.any()
Promise.any([ 
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("ERROR!")), 100)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 200)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 300))
]).then(console.log); // 1