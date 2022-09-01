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
document.querySelector(".account-dropdown").addEventListener("click", function () {
    this.classList.toggle("active");
})

// pricing open full list
const pricingLinks = document.querySelectorAll('.card-price-list-show');

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