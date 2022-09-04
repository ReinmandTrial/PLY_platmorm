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
document.querySelector(".account-dropdown")?.addEventListener("click", function () {
    this.classList.toggle("active");
})

// pricing open full list
const pricingLinks = document.querySelectorAll(".card-price-list-show");

for (const pricingLink of pricingLinks) {
    pricingLink.addEventListener("click", function handleClick(e) {
        e.preventDefault();
        pricingLink.classList.add("open");
    });
}

// pricing markets
function sliderChange(val) {
    document.getElementById("output-value").value = val * 8.99;
    document.querySelector(".range-input-value").textContent = document.getElementById("input-value").value;
    document.getElementById("output-value").style.width = (document.getElementById("output-value").value.length - 0.8) + 'ch';
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

// annual/month pricing switch
const switchPrice = document.querySelector(".form-pricing-switch");
const togglePrice = () => document.querySelectorAll(".shop-choice-item")
    .forEach(label => label.classList.toggle("disabled"))

switchPrice.addEventListener("change", togglePrice);
const shopRadios = document.querySelectorAll(".shop-choice-item-radio");
document.querySelector(".form-pricing-switch").addEventListener("click", function () {
    console.log("switch");
    for (const shopRadio of shopRadios) {
        switchPrice.checked ? shopRadio.disabled=true : shopRadio.disabled=false;
    }
});