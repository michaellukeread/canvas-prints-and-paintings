const slideover = document.getElementById("slideover");
const overlay = document.getElementById("overlay");

const scrollLock = () =>
  (document.getElementsByTagName("body")[0].style.overflow = "hidden");

const scrollUnlock = () =>
  (document.getElementsByTagName("body")[0].style.overflow = "auto");

const openSlideover = () => {
  scrollLock();
  slideover.classList.add("slideover-active");
  overlay.classList.add("overlay-active");
};

const closeSlideover = () => {
  scrollUnlock();
  slideover.classList.remove("slideover-active");
  overlay.classList.remove("overlay-active");
};
