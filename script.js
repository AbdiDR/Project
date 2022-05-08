const navbarIcon = document.querySelector("#navbar-icon");
navbarIcon.addEventListener("click", function () {
  const navbarGroup = document.querySelector("#navbar-group");
  navbarGroup.classList.toggle("navbar-group--close");
});

const navbarItems = document.querySelectorAll("#navbar-group li");

for (const item of navbarItems) {
  item.addEventListener("click", function () {
    const navbarGroup = document.querySelector("#navbar-group");
    navbarGroup.classList.add("navbar-group--close");
  });
}

var header = document.getElementById("Navbar");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

document.getElementById("title").innerHTML = "Portofolio";
document.getElementById("about").innerHTML = "About Me";
document.getElementById("biodata").innerHTML = "Biodata";
document.getElementById("experience").innerHTML = "Education";
