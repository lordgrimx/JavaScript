export const findIntersection = (arr) => {

    // create a new variable as an Array
    let intersection = []

    // .split(), .replace()
    const set1 = arr[0].replace(/\s/g,"").split(",")
    const set2= arr[1].replace(/\s/g,"").split(",")

    // .foreach()

    set2.forEach((value) => {
        if(set1.includes(value)){ // .include() methodu eger verdigin degeri o array iceriyorsa true deger dondurur.
            intersection.push(value)
        }
    })

    if(intersection.length !== 0 ){
        return intersection.toString()

    }else{
        return false
    }

}



/*
    FIND INTERSECTION

Have the function findIntersection(strArr) read the array of the strings 
stored in strArr which will contain 2 elements: the first element will
represent a list of comma-seperated numbers sorted in ascending order,
the second element will represent a second list of comma-seperated 
numbers (also sorted). Your goal is to return a comma-seperated string
containing thenumbers that occur in elements of strArr in sorted 
order. If there is no insertion, return the string false.

*/