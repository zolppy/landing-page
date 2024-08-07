const handleResize = () => {
  const screenWidth = window.innerWidth;
  const main = document.querySelector("main");
  const block = document.querySelector(".block");
  const footer = document.querySelector("footer");

  if (screenWidth < 900) {
    block.style.display = "grid";
    main.style.display = "none";
    footer.style.display = "none";
  } else {
    block.style.display = "none";
    main.style.display = "block";
    footer.style.display = "flex";
  }
};

document.addEventListener("DOMContentLoaded", handleResize);
window.addEventListener("resize", handleResize);
