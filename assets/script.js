const getScreenWidth = () => {
  const screenWidth = window.innerWidth;

  return screenWidth;
};

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const screenWidth = getScreenWidth();

  if (screenWidth < 900) {
    body.textContent = "";
    body.innerHTML =
      "<main><section><h1>Disponível para desktop</h1></section></main>";
    body.style.display = "grid";
    body.style.minHeight = "100dvh";
    body.style.placeItems = "center";
  }
});
