var moment = require("moment");
var math = require("mathjs");

console.log("Hello from JS!");
var datetime = moment().startOf("day").fromNow();
console.log(datetime);
var dateTimed = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(dateTimed);

console.log(math.sqrt(-4));
