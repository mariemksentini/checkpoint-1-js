
function minMax(arr) {
    var mini = arr[0]
    var maxi = arr[0]
    for (var i = 0; i<arr.length; i++){
      if (arr[i]<mini){
        mini=arr[i]
      }
    }
    //for (var i in t)
  
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] > maxi) {
        maxi = arr[i]
      }
    }
    return [mini,maxi]
  }
  
  console.log(minMax([0,1,2,3,4,5]))