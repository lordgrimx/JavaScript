export const wordCount = (str) => {
    let wordCount = 0;
    
    const regex = /[^ ]+/g

    const newStr = str.match(regex)

    console.log(newStr);

    newStr.forEach(word => {
        wordCount++
    });
    
    return `Word Count:${wordCount}  Words:${newStr.join('\n')}`
    //return str.split(' ').length
}