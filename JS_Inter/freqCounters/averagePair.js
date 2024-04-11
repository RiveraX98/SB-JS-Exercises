
//averagePair([1, 2, 3], 2.5); // true

function averagePair(arr, target){
let left = 0 
let right = arr.length-1 

while (left < right){
    const avg = (arr[left] + arr[right]) / 2
    if (avg === target) return true
    if(avg > target){
        right--
    }
    else{
        left++ 
    }
}
}