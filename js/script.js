//nav bar

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".bar").classList.toggle("animate");
    var mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.toggle("show");
  });
//Scroll to top function
const button = document.querySelector(".btn");

const displayButton = () => {
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if (window.scrollY > 300) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(event);
  });
};

displayButton();
scrollToTop();

//Toggle Students
const toggleBtn = document.querySelector("#clickme");
const divList = document.querySelector("#stdholder1");

// action to be taken when clicked on hide list button
function myFunction() {
  var x = document.getElementById("stdcontainer");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}
function myFunction2() {
  var x = document.getElementById("stdcontainer2");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}
function myFunction3() {
  var x = document.getElementById("stdcontainer3");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}
function myFunction4() {
  var x = document.getElementById("stdcontainer4");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}
