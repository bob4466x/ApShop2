const menuProducts = [
  {
    category: "mac",
    title: "iMac 2017",
    price: "1300$",
    imgSrc: "Img/macbook-air.webp",
  },
  {
    category: "iphone",
    title: "iPhone 4S",
    price: "50$",
    imgSrc: "Img/iphone-4.webp",
  },
  {
    category: "iphone",
    title: "iPhone 16",
    price: "1050$",
    imgSrc:
      "Img/Apple-iPhone-16-Pro-hero-240909-lp.jpg.news_app_ed-removebg-preview.png",
  },
  {
    category: "ipad",
    title: "iPad Air",
    price: "700$",
    imgSrc: "Img/ipad-air.webp",
  },
  {
    category: "ipad",
    title: "iPad Mini",
    price: "600$",
    imgSrc: "Img/ipad-mini.webp",
  },
  {
    category: "ipad",
    title: "iPad Pro",
    price: "800$",
    imgSrc: "Img/ipad-pro.webp",
  },
  {
    category: "iphone",
    title: "iPhone 3G",
    price: "40$",
    imgSrc: "Img/iphone-3.webp",
  },

  {
    category: "iphone",
    title: "iPhone 5S",
    price: "65$",
    imgSrc: "Img/iphone-5s.webp",
  },
  {
    category: "mac",
    title: "macBook Pro",
    price: "1399$",
    imgSrc: "Img/macbook-pro.webp",
  },

  {
    category: "iwatch",
    title: "iWatch 6 Series",
    price: "400$",
    imgSrc: "Img/iwatch-6.webp",
  },

  {
    category: "mac",
    title: "macBook Air",
    price: "800$",
    imgSrc: "Img/macbook-air.webp",
  },
  {
    category: "mac",
    title: "macBook 2015",
    price: "700$",
    imgSrc: "Img/macbook-pro-2015.webp",
  },
  {
    category: "iwatch",
    title: "iWatch 8 Series",
    price: "600$",
    imgSrc: "Img/iwatch-8.webp",
  },
  {
    category: "iphone",
    title: "iPhone 14 Pro Max",
    price: "1200$",
    imgSrc: "Img/iphone-14.webp",
  },
  {
    category: "airport",
    title: "Boat 11 pro",
    price: "100$",
    imgSrc: "Img/airport 1.png",
  },
  {
    category: "airport",
    title: "Boat 11 pro",
    price: "100$",
    imgSrc: "Img/airport 1.png",
  },
];

const menuWrapper = document.querySelector(".menu-wrapper");
const btnContainer = document.querySelector(".btn-container");
const allBtns = document.querySelectorAll(".btn");
const btnclose = document.querySelector(".close");
const btnopen = document.querySelector(".open");

const nav = document.querySelector(".nav-two");
console.log(menuWrapper);
btnContainer.addEventListener("click", (e) => {
  const btnId = e.target.dataset.id;
  allBtns.forEach((btn) => {
    if (btnId) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});

allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    const filterMenu = menuProducts.filter((item) => {
      return item.category == id;
    });
    if (id == "all") {
      showingPruducts(menuProducts);
    } else {
      showingPruducts(filterMenu);
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  showingPruducts(menuProducts);
});

const showingPruducts = (arrayProducts) => {
  const displayProduct = arrayProducts
    .map((p) => {
      return `<article class="card">
        <img src="${p.imgSrc}" alt="" class="img">
        <h2 class="products-name">${p.title}</h2>
        <span class="price">${p.price}</span>
      </article>`;
    })
    .join("");
  menuWrapper.innerHTML = displayProduct;
};

btnclose.addEventListener("click", function () {
  nav.style.display = "none";
});
btnopen.addEventListener("click", function () {
  nav.style.display = "block";
});
