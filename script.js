const icons = document.querySelectorAll(".icons i");
let i = 1;

setInterval(() => {
  i++;
  const icon = document.querySelector(".icons i.change");
  icon.classList.remove("change");
  if (i < icons.length) {
    icon.nextElementSibling.classList.add("change");
  } else {
    icons[0].classList.add("change");
    i = 1;
  }
}, 1000);
