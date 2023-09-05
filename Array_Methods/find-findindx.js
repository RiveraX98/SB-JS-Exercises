/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 
*/

function findUserByUsername(arr, name) {
    return arr.find(function(val){
        return val.username === name 
    })

}



/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

*/

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ]

  function removeUser(arr, name) {
    let foundIndex = arr.findIndex(function(user){
      return user.username === name
    })
    if(foundIndex === -1) return
  
    return arr.splice(foundIndex,1)[0]
  }
