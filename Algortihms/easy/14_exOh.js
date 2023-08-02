export const exOh = (str) => {

    let xCounter = 0
    let oCounter = 0
    const newStr = str.split('')

    newStr.forEach(value => {
        
        xCounter += value === 'x' ? 1 : 0

        oCounter += value === 'o' ? 1 : 0
    });

    if(xCounter === oCounter){
        console.log(`X-number:${xCounter} and O-number:${oCounter}`);
        return true
    }else{
        console.log(`X-number:${xCounter} and O-number:${oCounter}`);
        return false
    }
}