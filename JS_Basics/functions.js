


 function diff (a,b){
    return a-b;
}
console.log(diff(4,2))



let add = function product (a,b){
    return a+b;
}
let sum = add(5,3)
console.log(sum)



function printDay (num){

let week = {
1: "sunday",
2: "monday", 
3: "tuesday",
4: "wednesday", 
5: "thursday",
6: "friday",
7: "saturday",
}
return (week[num])
}
console.log(printDay(4))




function lastElement(arry){
    return arry[arry.length-1]
}
array =  lastElement([3,7,6,5])
 console.log(array)




 function numberCompare(num1, num2){
    if (num1 > num2){
        return ("First is greater")
    }
    else if (num1< num2){
        return ("Second is greater")
    }
    return "numbers are equal"
 }
console.log(numberCompare(12,12))






function SLC (word,letter){
  let count= 0
    for (let spell of word){
      if (spell.toLowerCase() === letter.toLowerCase()){
        count+=1
      }
    }
  return count 
}
console.log(SLC("totalTime","t"))



function MLC(str){
  str = str.toLowerCase();
  let Object = {};
  for(let i =0; i< str.length; i++){
    if (Object[str[i]] === undefined){
      Object[str[i]] = 1;
    } else {
      Object[str[i]]++;
    }
  }
  return Object;
}
console.log(MLC("TactileToad"))




function arrayMan(arr, command, position, value){
  if(command === 'remove'){
    if(position === 'end'){
      return arr.pop();
    }
      return arr.shift();
  }
  else if(command === 'add'){
    if(position === 'end'){
      arr.push(value)
      return arr;
    }
    arr.unshift(val)
    return arr;
  }
}
console.log(arrayMan([1,2,3], "add", "end", "30"))




function isPalindrome(str){

   for(let i =0; i<str.length/2; i++){
     if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
       return false;
     }
   }
 return true;
}
console.log (isPalindrome("racecar"))









 function remove(str){
  for(arr of str){
    return arr
  }
}

  
  function removeFromString(str, index, count) {
    let newArr = str.splice(index,count);
    return newArr; 
  }
  
console.log (removeFromString("GreatMan", 5,3))


function removeFromString(str, index, count) {
  let newStr = str.indexOf(index)
}


function reverse(arr) {
let result = "";
for (let i = arr.length; i>=0; i--){
  result+=arr[i] ;
}
return result 
}
console.log(reverse[1,2,3])