export const userValidation = (str) => {

    if( (str.length >= 4 && str.length <= 25) &&
        (/[a-zA-Z]/).test(str.charAt(0)) &&
        (/^\w+$/).test(str) &&
        (/[a-zA-Z0-9]/).test(str.slice(-1)) )
    {
        return true
    }
    else{
        return false
    }


    //AND Operator
    // .length property

    //Reg Ex
    // .charAt ve .slice()
    //.test()

}

/*
    RULES
1. The username is between 4 and 25 chrarachters.
2. It must start letter.
3. It can only contain letters, numbers, and the underscore characters.
4. It cannot end with a underscore characters.

If the username is valid then your program should return the string true.
*/