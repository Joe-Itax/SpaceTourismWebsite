const iconHamburger = document.getElementById('iconHamburger');
const navMobile = document.getElementById('navMobile')
iconHamburger.onclick = () => {
  if (iconHamburger.src.includes("icon-hamburger.svg")) {
    navMobile.style.left = "initial";
    navMobile.style.display = "inherit";
    iconHamburger.src = "../assets/shared/icon-close.svg";
    navMobile.style.transition = "left 0.5s ease-out, display 0.5s ease-out";
  } else {
    navMobile.style.left = "-100%";
    navMobile.style.display = "none";
    iconHamburger.src = "../assets/shared/icon-hamburger.svg";
    navMobile.style.transition = "left 0.5s ease-out, display 0.5s ease-out";
  }
}