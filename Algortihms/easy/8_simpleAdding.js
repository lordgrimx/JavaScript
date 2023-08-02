export const simpleAdding = (val) => {
    let sum = 0;

    if(val >=0){
        for(let i = 0; i <= val; i++){
            sum += i
        }
        return sum
    }else{
        console.log("Please Write a correct number.")
    }
}