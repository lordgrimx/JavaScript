export const vowelCount = (str) => {

    let vowelNum = 0;

    const regex = /[aeiouAEIOU]/g;

    //const arrStr = str.split('')
    const arrStr = [...str];

    arrStr.forEach(item => {
        if(item.match(regex)){
            vowelNum++
        }
    });
    return vowelNum
}