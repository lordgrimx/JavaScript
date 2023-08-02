export const firstFactorial = (num) => {

let factorial = 1;
    if(num < 18 && num >= 1){
        for(let i = 1; i <= num; i++){
        factorial *= i;

        }

        return factorial
    }else{
        console.log("Your number is not valid. Please check it!")
    }
}



/*  First Factorial 

Using the JavaScript language, have the function FirstFactorial(num) take
the num paramater being passed and return the fuctorial of it (ie. if num =4,
return 4*3*2*1 ). For the test cases, the range will between 1 to 18.


*/