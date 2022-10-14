// header class on scroll
let scrollpos = window.scrollY;
function add_class_on_scroll() {
  document.body.classList.add("fixed-header");
}
function remove_class_on_scroll() {
  document.body.classList.remove("fixed-header");
}
window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;
  if (scrollpos > 40) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

// header dropdown
document
  .querySelector(".account-dropdown")
  ?.addEventListener("click", function () {
    this.classList.toggle("active");
  });

document.querySelector("html").addEventListener("click", function (e) {
  if (e.target !== document.querySelector(".account-dropdown")) {
    document.querySelector(".account-dropdown")?.classList.remove("active");
  }
});

//fullscreen toggle
let myDocument = document.documentElement;
let fullToggle = document.querySelector(".fullscreen-toggler");
let fullToggleCheckbox = document.querySelector(".fullscreen-checkbox");
fullToggle?.addEventListener("click", () => {
  if (fullToggleCheckbox.checked) {
    if (myDocument.requestFullscreen) {
      myDocument.requestFullscreen();
    } else if (myDocument.msRequestFullscreen) {
      myDocument.msRequestFullscreen();
    } else if (myDocument.mozRequestFullScreen) {
      myDocument.mozRequestFullScreen();
    } else if (myDocument.webkitRequestFullscreen) {
      myDocument.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msexitFullscreen) {
      document.msexitFullscreen();
    } else if (document.mozexitFullscreen) {
      document.mozexitFullscreen();
    } else if (document.webkitexitFullscreen) {
      document.webkitexitFullscreen();
    }
  }
});

// pricing open full list
const pricingLinks = document.querySelectorAll(".card-price-list-show");

for (const pricingLink of pricingLinks) {
  pricingLink.addEventListener("click", function handleClick(e) {
    e.preventDefault();
    pricingLink.classList.add("open");
  });
}

// pricing month/year switch
let periodSwitch = document.querySelector(".price-period-switch");
const textVal = document.querySelector(".card-price-top-cost-monthly-number");
if (periodSwitch) {
  periodSwitch.addEventListener("click", periodChange);
}

function periodChange() {
  if (textVal.innerHTML === "8.99") {
    textVal.innerHTML = "6.99";
    document.getElementById("output-value").value = "6.99";
    document.getElementById("input-value").value = 1;
    document.querySelector(".range-input-value").textContent = "1";
  } else {
    textVal.innerHTML = "8.99";
    document.getElementById("output-value").value = "8.99";
    document.getElementById("input-value").value = 1;
    document.querySelector(".range-input-value").textContent = "1";
  }
}

// pricing markets
function sliderChange(val) {
  if (textVal.innerHTML === "8.99") {
    document.getElementById("output-value").value = val * 8.99;
  } else {
    document.getElementById("output-value").value = val * 6.99;
  }
  document.querySelector(".range-input-value").textContent =
    document.getElementById("input-value").value;
  document.getElementById("output-value").style.width =
    document.getElementById("output-value").value.length - 0.8 + "ch";
}

// tabs
function Tabs() {
  var bindAll = function () {
    var menuElements = document.querySelectorAll("[data-tab]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener("click", change, false);
    }
  };

  var clear = function () {
    var menuElements = document.querySelectorAll("[data-tab]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove("active");
      var id = menuElements[i].getAttribute("data-tab");
      document.getElementById(id).classList.remove("active");
    }
  };

  var change = function (e) {
    clear();
    e.target.classList.add("active");
    var id = e.currentTarget.getAttribute("data-tab");
    document.getElementById(id).classList.add("active");
  };

  bindAll();
}
var connectTabs = new Tabs();

// annual/month pricing switch in modal
const switchPrice = document.querySelector(".form-pricing-switch");
const togglePrice = () =>
  document
    .querySelectorAll(".shop-choice-item")
    .forEach((label) => label.classList.toggle("disabled"));
if (switchPrice) {
  switchPrice.addEventListener("change", togglePrice);
}
const shopRadios = document.querySelectorAll(".shop-choice-item-radio");
document
  .querySelector(".form-pricing-switch")
  ?.addEventListener("click", function () {
    console.log("switch");
    for (const shopRadio of shopRadios) {
      switchPrice.checked
        ? (shopRadio.disabled = true)
        : (shopRadio.disabled = false);
    }
  });

// file upload
document.querySelector("html").classList.add("js");

let fileInput = document.querySelector(".form-input-file"),
  button = document.querySelector(".form-input-file-trigger"),
  the_return = document.querySelector(".form-file-return");
if (fileInput) {
  button.addEventListener("keydown", function (event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
      fileInput.focus();
    }
  });
  button.addEventListener("click", function (event) {
    fileInput.focus();
    return false;
  });
  fileInput.addEventListener("change", function (event) {
    the_return.innerHTML = this.files[0].name;
  });
}

// select
const select = document.querySelectorAll(".select-btn");
const option = document.querySelectorAll(".option");
let index = 1;

select.forEach((a) => {
  a.addEventListener("click", (b) => {
    const next = b.target.nextElementSibling;
    next.classList.toggle("toggle");
    next.style.zIndex = index++;
  });
});
option.forEach((a) => {
  a.addEventListener("click", (b) => {
    b.target.parentElement.classList.remove("toggle");

    const parent = b.target.closest(".select").children[0];
    parent.setAttribute("data-type", b.target.getAttribute("data-type"));
    parent.innerText = b.target.innerText;
  });
});

// home slider
const swiperHome = new Swiper(".home-swiper", {
  // Optional parameters
  slidesPerView: 1.6,
  spaceBetween: 15,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    420: {
      slidesPerView: 1.8,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});

// home slider
const swiperFeature = new Swiper(".features-swiper", {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 15,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});

// search slider
const swiperSearch = new Swiper(".search-swiper", {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
    },
  },

  // If we need pagination
  pagination: {
    el: ".search-swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".search-swiper-button-next",
    prevEl: ".search-swiper-button-prev",
  },
});

// search filter button
let searchForm = document.getElementsByClassName("search-form-container")[0];
let searchFilterBtn = document.getElementsByClassName("filter-btn-more")[0];
searchFilterBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".search-form-filter").classList.add("open");
  searchFilterBtn.remove();
  if (window.screen.width > 768) {
    document.querySelector(".search-form-filter").prepend(searchForm);
  }
});

if (window.screen.width <= 768) {
  searchForm.appendChild(searchFilterBtn);
}

// search filter tag choice
if (document.querySelector(".tag-filter-input")) {
  window.addEventListener("load", () => {
    // (A) GET HTML ELEMENTS
    const input = document.querySelector(".tag-filter-input"), // search box
      list = document.querySelectorAll(".search-form-filter .filter-btn"); // all list items
    input.addEventListener("focus", function () {
      this.classList.add("tag-filter-input-focus");
    });
    input.addEventListener("blur", function () {
      this.classList.remove("tag-filter-input-focus");
    });

    // (B) ATTACH KEY UP LISTENER TO SEARCH BOX
    input.onkeyup = () => {
      // (B1) GET CURRENT SEARCH TERM
      let search = input.value.toLowerCase();

      // (B2) LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
      for (let i of list) {
        let item = i.innerHTML.toLowerCase();
        if (item.indexOf(search) == -1) {
          i.classList.add("is-hidden");
        } else {
          i.classList.remove("is-hidden");
        }
      }
    };
    let form = document.querySelector(".search-form");
    function handleForm(event) {
      event.preventDefault();
    }
    form.addEventListener("submit", handleForm);
  });
}

// search filters main script
const filters = document.querySelectorAll(".search .filter-btn");

filters.forEach((filter) => {
  filter.addEventListener("click", function () {
    let selectedFilter = filter.getAttribute("data-filter");
    filter.classList.add("active");

    let itemsToHide = document.querySelectorAll(
      `.search-form-filter-second .filter-btn:not([data-filter='${selectedFilter}'])`
    );
    let itemsToShow = document.querySelectorAll(
      `.search-form-filter-second [data-filter='${selectedFilter}']`
    );
    let cardsToHide = document.querySelectorAll(
      `.search-form-filter-results .card-research-case:not([data-filter='${selectedFilter}'])`
    );
    let cardsToShow = document.querySelectorAll(
      `.search-form-filter-results [data-filter='${selectedFilter}']`
    );

    if (filter.classList.contains("active")) {
      document
        .querySelector(".search-form-filter-second")
        .classList.add("show");
    }

    if (selectedFilter == "all") {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll(
        ".search-form-filter-second [data-filter]"
      );
    }

    itemsToHide.forEach((el) => {
      el.classList.add("hide");
      el.classList.remove("show");
    });

    itemsToShow.forEach((el) => {
      el.classList.remove("hide");
      el.classList.add("show");
    });

    cardsToHide.forEach((el) => {
      el.classList.add("hide");
      el.classList.remove("show");
    });

    cardsToShow.forEach((el) => {
      el.classList.remove("hide");
      el.classList.add("show");
    });
  });
});

const filtersTop = document.querySelectorAll(
  ".search-form-filter .filter-group"
);
const filtersBottom = document.querySelectorAll(
  ".search-form-filter-second .filter-btn"
);
filtersTop.forEach((filterTop) => {
  filterTop.addEventListener("click", function () {
    document
      .querySelectorAll(".search-form-filter-results .card-research-case")
      .forEach(function (el) {
        el.style.display = "none";
      });
  });
});
filtersBottom.forEach((filterBottom) => {
  filterBottom.addEventListener("click", function () {
    document
      .querySelectorAll(".search-form-filter-results .card-research-case")
      .forEach(function (el) {
        el.style.display = "block";
      });
  });
});

// small cards text move to big card
let trigger = document.querySelectorAll(".card-trigger");
let triggerHeading = document.querySelectorAll(".card-trigger-name");
let targetHeading = document.querySelector(".card-target-name");
let targetImg = document.querySelector(".card-picture-target");
for (let i = 0; i < trigger.length; i++) {
  trigger[i].addEventListener("click", function (e) {
    e.preventDefault();
    targetHeading.textContent = trigger[i].children[1].children[1].textContent;
    targetImg.setAttribute("src", trigger[i].children[0].getAttribute("src"));
  });
}

// footer email form
document
  .querySelector(".btn-email-subscribe")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".text-input-email").remove();
  });
