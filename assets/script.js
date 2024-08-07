const getScreenWidth = () => {
  const screenWidth = window.innerWidth;

  return screenWidth;
};

document.addEventListener("DOMContentLoaded", () => {
  const screenWidth = getScreenWidth();

  if (screenWidth < 900) {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    const section = document.createElement("section");
    const p = document.createElement("p");

    p.innerHTML = "Disponível <br /> para <br /> desktop";
    p.style.fontSize = "24px";
    p.style.fontWeight = "bold";
    p.style.textAlign = "center";
    section.appendChild(p);
    section.style.display = "grid";
    section.style.minHeight = "100dvh";
    section.style.placeItems = "center";
    main.appendChild(section);
    body.innerHTML = "";
    body.appendChild(main);
  }
});
