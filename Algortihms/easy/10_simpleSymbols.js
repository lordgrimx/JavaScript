export const simpleSymbols = (str) => {

    const regex = /(?<=\+{2})([a-zA-Z])(?=\+{2})/

    const strValue = str

    if(regex.test(strValue)){

        return true

    }else{
        
        return false
    }
}