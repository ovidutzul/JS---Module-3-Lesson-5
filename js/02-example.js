/*
	We have an object that stores our team salaries.
	Write code for summing all salaries and store the result in the sum variable.
	Should get 390. If the salaries object is empty, then the result should be 0.
*/

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
const salariesValues = Object.values(salaries);
for (const value of salariesValues) {
	sum += value;
}

console.log(sum);