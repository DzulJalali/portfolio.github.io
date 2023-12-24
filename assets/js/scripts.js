const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

function downloadFile() {
  var fileId = "1xo9MK130F7mbj2MUguRRdR9g-_bmwsUd";
  var downloadUrl = "https://drive.google.com/uc?export=download&id=" + fileId;
  window.open(downloadUrl, "_blank");
}
