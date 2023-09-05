

function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }


let favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber] :"That is my favorite!"
}



let  newInstructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }


  function createAnimal (species,verb,noise){
   return {
    species,
    [verb](){
        return noise ;
    }

    }
  }
  console.log(createAnimal("sheep", "bleet", "BAAAAaaaa"))



  let obj = {
    a:1,
    c:2,
    e:3,

  }

 let  {hello = 23 } = obj;
  obj.f = 4
const {a,c} = obj
console.log (a)
  console.log(obj.f)
  console.log(hello)
  console.log(obj)