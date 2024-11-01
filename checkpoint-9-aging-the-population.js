var arr = {
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13
  }
  var names = Object.keys(arr)
  
  function afterNYears(names, n) {
    for (i in names) {
      let name = names[i];
      arr[name] += n
    }
    return arr
  
  }
  var n=5
  console.log(afterNYears(names, n))