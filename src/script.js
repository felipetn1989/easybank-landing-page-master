const socialIcons = document.querySelectorAll(".social_icon");

const socialMedia = [
  "facebook",
  "youtube",
  "twitter",
  "pinterest",
  "instagram",
];

socialIcons.forEach((icon, index) => {
  icon.addEventListener("mouseenter", () => {
    icon.src = `../images/icon-${socialMedia[index]}-green.svg`;
  });
  icon.addEventListener("mouseout", () => {
    icon.src = `../images/icon-${socialMedia[index]}.svg`;
  });
});

menuIcon.addEventListener("click", displayMenu);

function displayMenu() {
  topMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  menuIcon.src = topMenu.classList.contains("hidden")
    ? "../images/icon-hamburger.svg"
    : "../images/icon-close.svg";
}

window.addEventListener("resize", () => {
  topMenu.classList.add("hidden");
  overlay.classList.add("hidden");
  menuIcon.src = "../images/icon-hamburger.svg";
});
