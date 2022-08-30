// pricing open full list
const pricingLinks = document.querySelectorAll('.card-price-list-show');

for (const pricingLink of pricingLinks) {
    pricingLink.addEventListener('click', function handleClick(e) {
        e.preventDefault();
        pricingLink.classList.add('open');
    });
}

// pricing markets
// const priceInput = document.getElementById("input-value");
// const priceOutput = document.getElementById("output-value");

// priceInput.addEventListener('change', (event) => {
//     priceOutput.value = parseFloat(this.value);
//     // const result = parseFloat(this.value);
//     // console.log(result);
// });

function sliderChange(val) {
    document.getElementById("output-value").value = val * 8.99;
    document.querySelector(".range-input-value").textContent = document.getElementById("input-value").value;
    document.getElementById("output-value").style.width = (document.getElementById("output-value").value.length - 0.8) + 'ch';
}