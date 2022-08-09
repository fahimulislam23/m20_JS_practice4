function findLeapYear(array){
    leapYearArray = [];

    for(i = 0; i < array.length; i ++){

        if((array[i] % 4 ==0) && (array[i] % 100 != 0) || (array[i] % 400 == 0)){
            leapYearArray.push(array[i]);
        }
        
    }
    return leapYearArray;
}
const years = [2023, 2024, 2025, 2028, 2030, 1900];
var result = findLeapYear(years);
console.log(result);