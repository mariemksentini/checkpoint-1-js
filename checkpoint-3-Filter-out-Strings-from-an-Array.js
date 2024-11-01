function filterArray(arr) {
    var arrsorted = []
  
    for (element of arr) {
      if (typeof (element) === "number"){
        arrsorted.push(element)
      }
      }
    return arrsorted
  }
  
  arr = [1, 2, "aasf", "1", "123", 123]
  console.log(filterArray(arr))