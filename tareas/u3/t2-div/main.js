document.getElementById("miDiv").addEventListener("click", function() {
    var div = document.getElementById("miDiv");
    var currentColor = div.style.backgroundColor;
    div.style.backgroundColor = currentColor === 'black' ? 'blue' : 'black';
  });
  