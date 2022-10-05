var person = {
  firstName: 'Louis',
  lastName: 'Zhang',
  hobby: 'Piano playing'
};
console.log(person);

var fullName = "The person's name is " + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'coder';
var job = "The person's current job is " + person.job;
console.log(job);

person.previousJob = 'driver';
var pastjob = "The person's previous Job is " + person.previousJob;
console.log(pastjob);

console.log('The complete person object ', person);
