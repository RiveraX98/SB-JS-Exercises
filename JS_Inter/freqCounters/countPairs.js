
//countPairs([3,1,5,4,2], 6) 
function countPairs (arr,num){
    let start = 0 
    let end = arr.length - 1
    let count = 0 

    while (start < end ){
        arr.sort((a, b) => a - b);
        let sum = arr[start] + arr[end]
        if (sum === num){
            count++
        }else if (sum < num) {
            start++;
        } else {
            end--;
        }
    }
    return count
}