var arr = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
  ]
  
function getBudgets(arr) {
    var bud = 0
    for (var i=0; i<arr.length ; i++ ){
        bud +=  arr[i].budget
    }
  
    return bud
  
}
  
  
console.log(getBudgets(arr))


//console.log(Object.keys(user))

// console.log(Object.values(user))

// console.log(Object.entries(user))