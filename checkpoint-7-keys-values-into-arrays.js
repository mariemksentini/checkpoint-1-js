var obj = {
    D: 1,
    B: 2,
    C: 3
}

function objectToArray (obj) {
      return Object.entries(obj)
}
  
console.log(objectToArray (obj))