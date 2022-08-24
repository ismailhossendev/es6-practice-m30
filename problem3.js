/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. 
*/
const arr = [1, 2, 3, 4, 5];
const avrArr = arrInp => {
    let sum = 0;
    for (let i of arrInp) {     
        const tryT = Math.pow(i,2);
        sum = sum + tryT;
    }
    const calc = sum / arrInp.length;
    return calc;
    
}
const calc = avrArr(arr);
console.log(calc);