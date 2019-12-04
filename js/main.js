//=================================================
//event on click for mobile menu

function openMenu() {
  document.querySelector(".mobile-nav").style.height = "16rem";
  document.querySelector(".mobile-nav").style.opacity = "1";
  document.querySelector("#mobile-close-btn").style.display = "inline-block";
  document.querySelector("#mobile-open-btn").style.display = "none";
}

function closeMenu() {
  document.querySelector(".mobile-nav").style.height = "0";
  document.querySelector(".mobile-nav").style.opacity = "0";
  document.querySelector("#mobile-close-btn").style.display = "none";
  document.querySelector("#mobile-open-btn").style.display = "inline-block";

}

//=================================================
// resize window on event

function resizeMenu() {
  if (window.matchMedia("(min-width: 769px)").matches) {
    closeMenu();
  }
}

window.onresize = function() {resizeMenu()};


//=================================================
// signup sindow

function openSignup() {
  document.querySelector(".signup-popup").style.display = "flex";
}

function closeSignup() {
  document.querySelector(".signup-popup").style.display = "none";
}



//=================================================
