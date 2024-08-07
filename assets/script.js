const handleResize = () => {
  const screenWidth = window.innerWidth;
  const block = document.querySelector(".block");

  if (screenWidth < 900) {
    block.style.display = "grid";
  } else {
    block.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", handleResize);
window.addEventListener("resize", handleResize);
