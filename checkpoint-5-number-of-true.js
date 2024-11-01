var arr=[true, false, false, true, false]

function countTrue(arr) {
  var sum=0
  for (i in arr){
  
    if (arr[i] == true){
      sum++
    }
  }
  return sum
}

console.log(countTrue(arr))