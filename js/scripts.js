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

//fullscreen toggle
let myDocument = document.documentElement;
let fullToggle = document.querySelector(".fullscreen-toggler");
let fullToggleCheckbox = document.querySelector(".fullscreen-checkbox");
fullToggle.addEventListener("click", () => {
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

// search slider
const swiper = new Swiper(".search-swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
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
