

const filterOutOdds = () => {
    let nums = Array.prototype.slice.call(arguments);
     nums.filter( num => num % 2 ===0) }
    


let findMin = (...nums) => Math.min(...nums)



//let mergeObjects = {...obj1, ...obj2}



const doubleAndReturnArgs = (arr, ...args) =>
[...arr, ...args].map (num => num*2)



const removeRandom = items => {
let idx = Math.floor(Math.random()* items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)]
}


const extend = (array1, array2) => 
 [...array1, ...array2];
  



const addKeyVal = (obj, key, val) => {
let newObj = { ...obj}
   newObj[key] = val;
    return newObj;
} 



const removeKey = (obj,key) =>{
    let newObj = {...obj, }
    delete newObj[key]
    return newObj
}



const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}


const update = (obj,key, val) =>{
    return {...obj, [key]:val }
}