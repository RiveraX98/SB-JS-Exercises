/*

#1
{1,2,3,4}


#2
ref


#3
0: {Array(3) => true}
1: {Array(3) => false}



const hasDuplicate = (arr) => 
 new Set(arr).size < arr.length ? true : false 



function vowelCount(str){
    const map = new Map ()
    let vowels = "aeiou"
    for (let letter of str ){
        const char = letter.toLowerCase()
        if (vowels.includes(char)){
            if (map.has(char)){
                map.set(char,map.get(char)+1)}
                else {
                    map.set(char,1)
                }
            }
        }
        return map
    }
    
*/




