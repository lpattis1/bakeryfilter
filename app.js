const filterBtns = document.querySelectorAll(".filter-btn");
const searchItems = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search");
const items = document.querySelectorAll(".item");
const itemNames = document.querySelectorAll(".name");

function filterByCategory() {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let btnCategory = btn.dataset.category;

      for (let i = 0; i < items.length; i++) {
        items[i].animate([{ opacity: "0.4" }, { opacity: "1" }], {
          duration: 800,
          fill: "forwards",
        });
        if (!items[i].classList.contains(btnCategory)) {
          items[i].classList.add("hide");
        } else {
          items[i].classList.remove("hide");
        }

        if (btnCategory === "all") {
          items[i].classList.remove("hide");
        }
      }

      for (let i = 0; i < filterBtns.length; i++) {
        if (e.target === filterBtns[i]) {
          filterBtns[i].classList.add("change");
        } else {
          filterBtns[i].classList.remove("change");
        }
      }
    });
  });
}

function filterBySearch() {
  searchItems.addEventListener("keyup", function (e) {
    e.preventDefault();
    let userSearch = e.target.value.toLowerCase();

    for (let i = 0; i < itemNames.length; i++) {
      items[i].animate([{ opacity: "0.4" }, { opacity: "1" }], {
        duration: 800,
        fill: "forwards",
      });
      let products = itemNames[i].textContent.toLowerCase();
      console.log(products);

      if (products.indexOf(userSearch) === -1) {
        items[i].classList.add("hide");
      } else {
        items[i].classList.remove("hide");
      }
    }
  });
}

filterByCategory();
filterBySearch();
