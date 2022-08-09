function findOddSum(array) {
    oddNumberArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
                oddNumberArray.push(array[i]);
        }
    }
    return oddNumberArray;
}
    function sumOfOddNumbers(array) {
        sum = 0;
        for (var j = 0; j < array.length; j++) {
            sum = sum + array[j];
        }
        return sum;
    }
    
var numbers = [5, 7, 8, 10, 45, 30];
var findOdd = findOddSum(numbers);
var result = sumOfOddNumbers(findOdd);
console.log(result);