var moment = require('moment');


// // Jan 1st 1970 00:00:00 am
//
// var date = new Date();
// console.log(date.getMonth());

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp)
var date = moment();

console.log(date.format('MMM Do, YYYY - h:mm a'));
