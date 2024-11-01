// String Manipulation Functions:
var stri="My name is mariem"


// Reverse a String: Write a function that reverses a given string.
var stri="My name is mariem"
function reversing (stri){
    var reversed =""
    for (var i=stri.length-1 ; i>=0 ; i--){
        reversed += stri[i]
    }
    return reversed
}
console.log(reversing (stri))


// Count Characters: Create a function that counts the number of characters in a string.
var stri="My name is mariem"
function counting (stri){
    return stri.length
}
console.log(counting (stri))


// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
var stri="my name is mariem ks"
function capiword (stri){
    var nvw =""
    for (var i=0 ; i< stri.length ; i++){
        if (i==0 || stri[i-1]==" "){
            nvw += stri[i].toUpperCase()
        }
        else {
            nvw += stri[i]
        }
    }
    return nvw
}
console.log(capiword (stri))





// Array Functions:
var arr=["mimi",9,7,true]


// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
var arr=[0,1,2,3,4,5]
function minMax(arr) {
    var mini = arr[0]
    var maxi = arr[0]
    for (var i = 0; i<arr.length; i++){
      if (arr[i]<mini){
        mini=arr[i]
      }
    }
  
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] > maxi) {
        maxi = arr[i]
      }
    }
    return [mini,maxi]
}
console.log(minMax(arr))


// Sum of Array: Create a function that calculates the sum of all elements in an array.
var arr=[0,1,2,3,4,5]
function summing(arr) {
    var sum = 0
    for (var i=0 ; i< arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(summing(arr))



// Filter Array: Implement a function that filters out elements from an array based on a given condition.
/*we will filter odd and negative elements*/
var arr2 = [-1, 5, -19, 2, 13, 12, 14, 2, 9, 3, 4, 0]
function filtering(arr2) {
  var newarr = []
  for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] > 0 && arr2[i] % 2 == 0) {
      newarr.push(arr2[i]);
    }
    
  }
  return newarr
}
console.log(filtering(arr2))





// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.
var num = 5
function facto(num) {
  var num2 = 1
  for (var i = 1; i < num + 1; i++) {
    num2 = num2 * i
    // console.log(num2)
  }
  return num2
}
console.log(facto(num))



// Prime Number Check: Create a function to check if a number is prime or not.
var numb = 49;

function primenum(numb) {
  if (numb < 2) return false;

  var a = true;
  var i = 2; 

  while (i <= Math.ceil(Math.sqrt(numb))) {
    console.log(Math.sqrt(numb))
    if (numb % i === 0) {
      a = false; 
      break; 
    }
    i++;
  }

  return a; 
}

var a = primenum(numb);
if (a) {
  console.log(numb + " is prime");
} else {
  console.log(numb + " not prime");
}



// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
