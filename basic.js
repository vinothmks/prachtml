
const time = new Date().getHours();
// var greeting ='hello';
console.log(time)

if (time < 10) {
   var greeting = "Good morning";
} else if ( time < 18) {
   var  greeting = "Good day";
} else {
    var greeting = "Good evening";
}

console.log(greeting)