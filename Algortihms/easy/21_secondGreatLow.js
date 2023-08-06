export const secondGreatLow = (arr) => {

    /** 
     * ! Remove the same value in array.
    */
    let newArr = []

    arr.forEach(num => {
        newArr.includes(num) ? true : newArr.push(num) 
    });

    console.log(newArr);

    const sortedArr = newArr.sort((a , b) => {return a - b})

    console.log(sortedArr);

    return `The Second Largest value in Array : ${sortedArr[sortedArr.length-2]} \n The Second Smallest value in Array: ${sortedArr[1]}`
}