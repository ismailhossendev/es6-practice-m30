/* Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result. 
*/
const array1 = [10,20,30]
const array2 = [100, 200, 300]
const combineArray = (arr1, arr2,) => {
    const fArry = [...arr1, ...arr2];
    return Math.max(...fArry)
}
const finalResult = combineArray(array1, array2);
console.log(finalResult)