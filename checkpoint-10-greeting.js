const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

var names = Object.keys(GUEST_LIST)
  
function greeting(name) {
    var greet = ""
    if (names.includes(name)) {
      var greet = "Hi! I'm " + name + ", and I'm from " + GUEST_LIST[name] +"."
    }
    else {
      var greet = "Hi! I'm a guest."
    }
  
    return greet
}

console.log(greeting("mimi"))