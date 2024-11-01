var colors = {
    "cyan": 23,
    "magenta": 12,
    "yellow": 10,
  };
  
  function inkLevels(colors) {
    var mini = 100000;
  
    for (var p in colors) {
      if (colors[p] < mini) {
        mini = colors[p];
      }
    }
    return mini;
  }
  
  console.log(inkLevels(colors))