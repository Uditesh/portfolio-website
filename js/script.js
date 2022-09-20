const profileImage = document.querySelector(".profile-img");
var menu = document.getElementById("menu");
var navLink = document.getElementsByClassName("nav-ul")[0];

// on menu click toggle the class
menu.onclick = function () {
  navLink.classList.toggle("active");
};

// Mouse hover effect on profile image
profileImage.addEventListener("mouseenter", () => {
  profileImage.src = "./images/uj7.png";
});
profileImage.addEventListener("mouseleave", () => {
  profileImage.src = "./images/uj6.png";
});

var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
