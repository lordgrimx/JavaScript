export const letterCount = (str) => {
/** 
    *! 1.YONTEM

    *? let repeatingCount = 0;
    *? let repeatingArr = []

    *? const newArr = str.toLowerCase().split(' ')

    newArr.forEach(letter => {

        console.log(letter);

        let tempArr = letter.toLowerCase().split('')

        for(let i = 1; i<tempArr.length; i++){
            
            console.log(tempArr)

            if(tempArr[i] === tempArr[i-1]){
                repeatingCount++
            }

        }

        repeatingArr.push(repeatingCount)

    });
    
    return Math.max(...repeatingArr)
    */
   const arr = str.replace(/[^a-zA-Z ]/g, '').toLowerCase().split(" ")

   let charBox = []

   for (let index = 0; index < arr.length; index++) {
        let obj = {}
        arr[index].split('').forEach(char => {

            char in obj ? obj[char] += 1 : obj[char] = 1
            
        });
        charBox.push(obj)
    
   }
   

   return charBox
}