const links = document.querySelector(".nav .links");

const icon = document.querySelector(".nav .toggle-menu");

icon.addEventListener("click", () => {
  links.classList.toggle("appear");
});
