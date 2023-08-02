export const timeConvert = (num) => {
    if(num >= 0){
        const minute = Math.floor(num / 60)
        const hour = Math.floor(minute / 60)
        const second = num % 60
        return `Hour:${hour} Minute:${minute} Second:${second}`
    }else{
        return `Your number is not valid!`
    }
    
}