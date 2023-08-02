export const isPalindrome = (str) => {
    const newStr = [...str];

    const tempStr = newStr.reverse()

    const reversedStr = tempStr.join("")

    console.log(newStr);
    console.log(tempStr);
    console.log(reversedStr);
    
    if(reversedStr === str){
        return "This is a palindrome"
    }else{
        return "This is not palindrome"
    }
}