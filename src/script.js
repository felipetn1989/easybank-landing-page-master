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
  })
});
