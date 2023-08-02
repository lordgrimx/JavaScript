export const questionMark = (str) => {
    if(str.length >= 5){

        const newStr = str.replace(/[^0-9?]/g, "")

        const arr = newStr.split("")

        let sums = []
        let sum = 0
        let iterator = 0

        arr.forEach((value) => {
            
            if(value != "?" && arr[iterator + 1] === "?" && arr[iterator + 2] === "?" && arr[iterator + 3] === "?"){
                sum = parseInt(value) + parseInt(arr[iterator + 4])
                sums.push(sum)
            }
            iterator += 1

        });
        console.log(str)
        console.log(newStr)
        console.log(arr)
        //console.log(sum)
        console.log(sums)

        return sums.includes(10) ? true : false
           
    }else{
        return false
    }
}