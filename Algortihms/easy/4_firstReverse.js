export const firstReversed = (str) => {

    
        //FIRST METHOD
    
    //let arr1 = []

    //for(let i = 0; i <= str.length-1 ; i++){
        //arr1[i] = str.charAt(str.length-(i+1))
    //}
    //return arr1.join("") 

    const arr = str.split("")
    const reversedArr = arr.reverse()
    const newStr = reversedArr.join("")

    return newStr

}




/*
    FIRST REVERSE
Have the function FirstReverse() take the 
str paramater being passed and return the 
string in reversed order.

*/