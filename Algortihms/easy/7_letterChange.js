export const letterChange = (str) => {

const newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
        if(char === "z"){
            return "a"
        }else{
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    })


    let vowelCapitalize = newStr.replace(/[a|e|i|u|o]/gi, (char) => {
        return char.toUpperCase()
    })

    return  vowelCapitalize
    
    
    
}