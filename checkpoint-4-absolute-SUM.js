var arr = [2, -1, 4, 8, 10]
function getAbsSum(arr) {
  var sum=0
  for (element of arr ){
    if (element <0){
      sum = sum - element
    }
    else {
      sum = sum + element
    }
  }
  return sum
}


console.log(getAbsSum(arr))