
 
function reverse(arr) {
 let result = [];
     for (let i= arr.length -1; i>=0; i-- ){
      result.push(arr[i]);}
    
    return result 
 }
  


    function min(arr) {
        let low = Infinity
        for (num of arr){
            if (num < low){
               low = num 
            }
        }
        return low
    }
   



    function multiples(x, n) {
        let arry= []
        for(let i = 1; i <=n; i++){
            arry.push(x*i);
        }
    return arry
    }
    


    function minMaxKeyInObject(json) {
        let arry = []
        for (let keys of Object.keys(json)){
           arry.push(keys)
        }
    let max = Math.max(...arry)
    let min = Math.min(...arry)
    let minMax = []
    minMax.push(min)
    minMax.push(max)
     
     return minMax
     }
    


     function containsEveryVowel(str) {
        let vowels = ("aeiou")
        for (let letter of vowels){
           if(!str.includes(letter)){
              return false;
        }
        return true;
     } 
     }




    function twoHighest(arr) {
        let list = []
        let lowList=[]
        let highest = Math.max(...arr)
        list.push(highest)
        for (num of arr){
            if (num < highest){
                lowList.push(num)
            }
        }
       let secHighest = Math.max(...lowList)
       list.unshift(secHighest)
       return list
     }
     





    
    function stringFromObject(json) {
        let arry = []
        for (let keys of Object.keys(json)){
            arry.push(` ${keys} = ${json[keys]} `)
        }
    let str = arry.toString()
    return str
    }
    








    


function stringFromObject(json) {
   let listofkeys = []
   let listofvalues = []

    for (key of Object.keys(json)){
        listofkeys.push(key)
    }
    for (value of Object.values(json)){
        listofvalues.push(value)
    }

let together= ("")

    for (let i = 1; i<listofkeys.length; i++){
       together.push(`${listofkeys[i]} = ${listofvalues[i]}, `)
    }
 
return together
}







function removeFromString(str, index, count) {
let newStr = " "
     for (let char of str ){
        while(i<=count){
            char.replace(str[index], "")
            i++
 }
 return str
}
}







function removeFromString(str, index, count) {
    for (let newStr of str){
        while (i<= count){
           newStr[index].shift
           i++
    }
}
return newStr
}

console.log(removeFromString)







function swapKeyAndValue(json, swapKey) {
    for (let key of json){
        if( key === swapKey){
            Object.keys(swapKeyAndValue).forEach(function(key) {
                let newkey = key + "SwappedKey";
               swapKeyAndValue[newkey] = swapKeyAndValue[key];
                delete swapKeyAndValue[key];
              });
        }
    }
   return swapKeyAndValue    
}
console.log(swapKeyAndValue)