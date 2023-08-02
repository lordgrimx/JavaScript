export const longestWorld = (sen) => {
    //1.adim = Noktalama isaretlerini kaldir
    //2.adim = Cumleyi bosluklardan itibaren bol ve kelimeleri arraye ekle
    //3.adim = kelimelerle olusturdugumuz arrayi karakter sayilarina gore azalan bir siraya gore sirala

    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ")

    // .replace() = ilk girdigin parametrenin haricinde bir deger var ise stringte o deger yerine senin vermis oldugun 2.paremetreyi uygular

    arr.sort((a, b) => {return b.length - a.length})

    // .sort() ile islem yapildiginda array degisir.
    

    return arr[0]
}

/*
    RULES
-using the Javascript language, have the function longestWorld(sen) take the
sen paramater being passed and return the longest word in the string.

-If there are two or more words that are the same length, return the first word
from the string with that length .

-Ignore punctuation and assume sen will not be empty.

*/