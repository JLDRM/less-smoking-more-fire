"use strict";

var title = document.getElementById("title");
var nextPageArrow = document.getElementById("next-page");

title.addEventListener("click", () => {
  document.location.href = "/";
});

nextPageArrow.addEventListener("click", changePageWithParams);

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

function changePageWithParams() {
  const path = document.location.pathname;
  const param = path.substring(1);
  if (param !== "") {
    const nextPage = parseInt(param) + 1;
    document.location.href = origin + "/" + nextPage.toString();
  } else {
    const origin = document.location.origin;
    document.location.href = origin + "/1";
  }
}
