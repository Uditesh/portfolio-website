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

// Contact Form
var errorMsg = document.querySelector(".validation-error");
function validateForm() {
  if (document.contactForm.name.value == "") {
    errorMsg.innerHTML = "Please enter your name.";
    errorMsg.classList.add("active");

    return false;
  } else {
    errorMsg.classList.remove("active");
  }
  var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  if (
    document.contactForm.email.value == "" ||
    !document.contactForm.email.value.match(emailRegex)
  ) {
    errorMsg.innerHTML = "Please enter a valid email address.";
    errorMsg.classList.add("active");

    return false;
  } else {
    errorMsg.classList.remove("active");
  }
  if (document.contactForm.message.value == "") {
    errorMsg.innerHTML = "Please enter your message.";
    errorMsg.classList.add("active");
    return false;
  } else {
    errorMsg.classList.remove("active");
  }
  return true;
}
document.contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm()) {
    document
      .getElementsByClassName("success-submit-message")[0]
      .classList.add("active");
    document.contactForm.reset();
    setTimeout(function () {
      document
        .getElementsByClassName("success-submit-message")[0]
        .classList.remove("active");
    }, 4000);
  }
});
