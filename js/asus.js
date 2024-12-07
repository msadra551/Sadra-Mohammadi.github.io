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

const items = document.querySelectorAll('.bg-hover');
const productList = document.getElementById('product-list');

// Define content for each category
const content = {
    phones: {
        image: '../images/asus/zenfon.webp',
        text: 'This is the latest in phones.',
        additionalItems: []
    },
    wearable: {
        image: '',
        text: 'Wearable tech is the future!',
        additionalItems: ['Smartwatch', 'Fitness Tracker']
    },
    gaming: {
        image: '../images/asus/rog.webp',
        text: 'Gaming handhelds that bring fun anywhere.',
        additionalItems: []
    },
    accessories: {
        image: '',
        text: 'Essential accessories for your devices.',
        additionalItems: ['Chargers', 'Covers']
    }
};

items.forEach(item => {
    item.addEventListener('mouseover', function() {
        const category = this.getAttribute('data-content');
        // Log category to console for debugging
        console.log('Hovered category:', category);
        updateContent(content[category]);
    });
});

function updateContent(category) {
    // Clear the current content
    productList.innerHTML = '';

    // Update image if exists or use a placeholder
    const imageElement = document.createElement('img');
    imageElement.src = category.image ? category.image : 'https://via.placeholder.com/150'; // Change to a placeholder if no image
    imageElement.alt = 'Product Image';
    productList.appendChild(createLi(imageElement, category.text));

    // Add additional items if any
    category.additionalItems.forEach(itemText => {
        productList.appendChild(createLi(null, itemText));
    });
}

function createLi(image, text) {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    const article = document.createElement('article');

    if (image) {
        article.appendChild(image);
    }
    const paragraph = document.createElement('p');
    paragraph.className = "center";
    paragraph.textContent = text;

    article.appendChild(paragraph);
    anchor.appendChild(article);
    li.appendChild(anchor);

    return li;
}