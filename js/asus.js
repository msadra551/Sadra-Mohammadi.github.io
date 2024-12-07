const MENUITEMS = document.querySelectorAll(".text-color");
const GAMINGMENU = document.querySelector(".gaming");
const IMAGES = document.querySelectorAll("img");
let isHovering = false; 


for (let i = 0; i < IMAGES.length; i++) {
  const IMG = IMAGES[i];
  const ORGINAL = IMG.src;
  const HOVER = IMG.src.replace(".svg", "-hover.svg");

  IMG.addEventListener("mouseenter", function () {
    IMG.setAttribute("src", HOVER); 
  });

  IMG.addEventListener("mouseleave", function () {
    IMG.setAttribute("src", ORGINAL);
  });
}


for (let i = 0; i < MENUITEMS.length; i++) {
  const ITEM = MENUITEMS[i];
  ITEM.addEventListener("mouseenter", function () {
    for (let k = 0; k < MENUITEMS.length; k++) {
      MENUITEMS[k].classList.remove("active");
    }

    ITEM.classList.add("active");

    if (ITEM.innerText === "Gaming") {
      GAMINGMENU.classList.add("show");
    }
  });

  ITEM.addEventListener("mouseleave", function () {
    if (ITEM.innerText === "Gaming") {
      setTimeout(function () {
        if (!isHovering) {
          GAMINGMENU.classList.remove("show");
          ITEM.classList.remove("active");
        }
      }, 100);
    } else {
      GAMINGMENU.classList.remove("show");
      ITEM.classList.remove("active");
    }
  });
}

GAMINGMENU.addEventListener("mouseenter", function () {
  isHovering = true; 
  for (let i = 0; i < MENUITEMS.length; i++) {
    if (MENUITEMS[i].innerText === "Gaming") {
      MENUITEMS[i].classList.add("active");
      break;
    }
  }
  GAMINGMENU.classList.add("show");
});

GAMINGMENU.addEventListener("mouseleave", function () {
  isHovering = false;
  for (let i = 0; i < MENUITEMS.length; i++) {
    if (MENUITEMS[i].innerText === "Gaming") {
      MENUITEMS[i].classList.remove("active");
      break;
    }
  }
  GAMINGMENU.classList.remove("show");
});
