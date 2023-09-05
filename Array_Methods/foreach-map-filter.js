

function doubleValues(arr){
    let newArry = []
    arr.forEach (function(val){
        newArry.push (val *2)
    })
    return newArry
}



function onlyEvenValues(arr){
    let newArry = []
    arr.forEach (function (val){
        if (val %2 === 0 ){
            newArry.push(val)
         }
    })
return newArry
}



 

function showFirstAndLast(arr){
    let newArry = []
    arr.forEach(function (str){
        newArry.push (str[0] + str[str.length -1])
    })
return newArry
}


  

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value
    })
    return arr
  }



function vowelCount(str){
let charArry = str.split("")
let obj = {}
let vowels = "aeiou"
charArry.forEach (function(val){
   let letter = val.toLowerCase()
    for (let vowel of vowels){
        if (letter === vowel){
            if ( obj[vowel]){
            obj[vowel] ++}

             else {
                obj[val] = 1
            }
    }
}})
return  obj
}





/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

*/

function doubleValuesWithMap(arr) {
return arr.map(function(val){
    return val * 2
})

}


/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

*/

function valTimesIndex(arr){
   return arr.map(function(val,ind){
        return val * ind
    })
}




/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

*/

function extractKey(arr, key){
   return arr.map(function(val){
        return val[key]
    })
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

*/


function extractFullName(arr){
   return arr.map (function(obj){
       return obj.first + ` ${obj.last}`
    })
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
*/

function filterByValue(arr, key) {
   return  arr.filter (function (val){
    return val[key] !== undefined  
})
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

*/

function find(arr, searchValue) {
   return arr.filter (function(val){
        return val === searchValue;
    })
   [undefined]
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

*/



function findInObj(arr, key, searchValue) {
   return arr.filter (function(val){
       return val[key] === searchValue
    })
    
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

*/


function removeVowels(str) {

   const strArry=  str.toLowerCase().split("")
   const vowels = "aeiou"
    return strArry.filter (function(val){
        return !(vowels.includes(val))
    })
   .join("")
}





/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

*/

function doubleOddNumbers(arr) {
   return  arr
    .filter(n=> n %2 !==0)
    .map(n=> n*2)


}