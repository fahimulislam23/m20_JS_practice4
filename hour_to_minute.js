//minute to hour and minute conversion
function timeConverter(num){
    const hours = (num/60); // hours is = 7.5
    const rhours = Math.floor(hours); // rhours is = 7

    const minutes = (hours - rhours) * 60; //minutes is = 30
    const rminutes = Math.round(minutes); // rminutes is = 30

    const seconds = num * 60;

    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s) and " + seconds + " total seconds"; //return value "450 minutes = 7 hour and 30 minute"
}
console.log(timeConverter(40));



//hour to minute and second conversion
function timeConverter(num){

    const hours = (num * 60);
    const minutes = hours * 60;

    return num + " hours = " + hours + " minute and " + minutes + " seconds";
};
console.log(timeConverter(4));

//hour to minute simple conversion
function hourToMin(input) {
    var min = input * 60;
    return min + " minutes";
}
var result = hourToMin(30);
console.log(result);