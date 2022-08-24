/*  Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the
    name of your friends
    b) Check if the length of each element is even, push elements
    with even length to a new array and return the result
    Print the result. 
*/

const friends = ['ismail', "ismialss", "ismail-chukanis"]

const arrFunction = friendsP => {
    const evenFriends = []
    for (let i = 0; i < friendsP.length; i++){
        const lengthIs = friendsP[i].length
        if (lengthIs % 2 == 0) {  
            evenFriends.push(lengthIs)
        }
    }
    return evenFriends
}
let result = arrFunction(friends)
console.log(result)