var button = document.getElementById("clickme"),
  count = 0;
  button.onclick = function() {
  count += 1;
  btn1.innerHTML = "Red Votes: " + count;
  all.innerHTML = counter + count;
};

var button = document.getElementById("clickme2"),
  counter = 0;
button.onclick = function() {
  counter += 1;
  btn2.innerHTML = "Blue Votes: " + counter;
  all.innerHTML = counter + count;
};

