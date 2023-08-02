export const letterCapitalize = (str) => {
    const newStr = str.split(" ")
    const resultArr = []
    
    newStr.forEach((word) => {
        let firstLetter = word.charAt(0).toUpperCase()
        let anotherLetters = word.slice(1, word.length)
        resultArr.push(firstLetter + anotherLetters)
    });

    return resultArr.join(' ') // .join() methodu arrayin icindeki string ifadeleri virgul yerine senin belirledigin ifade ile ayirarak birlestirir.
}