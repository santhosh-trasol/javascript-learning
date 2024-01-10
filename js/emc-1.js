var enterText = "";
var container = document.querySelector(".items");
var searching = container.querySelectorAll("h1");
console.log(searching);

function search(event) {
  enterText = event.target.value.toUpperCase();
  for (var i = 0; i < searching.length; i++) {
    if (searching[i].textContent.toUpperCase().indexOf(enterText) < 0) {
      searching[i].style.display = "none";
    } else {
      searching[i].style.display = "block";
    }
  }
}
