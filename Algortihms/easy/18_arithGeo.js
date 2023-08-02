export const arithGeo = (arr) => {

    let isArithmetric = true

    let isGeometric = true

    let diff = arr[1] - arr[0];

    let ratio = arr[1] / arr[0];
    
    for(let i = 2; i < arr.length ;i++){
        if(arr[i] - arr[i-1] !== diff){
            isArithmetric = false
        }
        if(arr[i] / arr[i-1] !== ratio){
            isGeometric = false
        }
        
    }

    if(isArithmetric === false && isGeometric === false){
        return -1
    }else if(isArithmetric === true && isGeometric === false){

        return `Arithmatic:${isArithmetric} but not Geometric.`

    }else if(isGeometric === true && isArithmetric === false){

        return `Geometric:${isGeometric} but not Arithmatic.`

    }else{
        return `Arithmatic:${isArithmetric} and Geometric:${isGeometric}`
    }

}