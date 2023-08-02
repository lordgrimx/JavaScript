export const abCheck = (str) => {
    const regex = /a...b/g
    if(regex.test(str)){
        return true
    }else{
        return false
    }
}


// String icerisinde kelime sorgusu Algoritmasi