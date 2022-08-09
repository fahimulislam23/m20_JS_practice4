function leap_year(input){
    if((input % 4 == 0) && (input % 100 != 0) || (input % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}
var isLeapYear = leap_year(2023);
console.log(isLeapYear);