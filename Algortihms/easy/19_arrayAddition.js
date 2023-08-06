export const arrayAddition = (arr) => {

    let biggestNum = 0;
    let sum = 0;

    // const newArr = Math.max(...arr)

    arr.forEach(value => {
        if(value >= biggestNum){
            biggestNum = value
        }
        sum += value
    });
    console.log(`The largest number value is : ${biggestNum} \n The total number's value is : ${sum} \n And The total number's value without the largest value : ${sum - biggestNum} So, `);
    
    return biggestNum === sum - biggestNum ? true:false
}