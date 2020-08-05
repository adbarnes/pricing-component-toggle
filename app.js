let priceBasicMonthly = 19.99;
let priceProfessionalMonthly = 24.99;
let priceMasterMonthly = 39.99;
let discount = 10 / 100;

let button = document.getElementById("toggle-button");
let monthlyTitle = document.getElementById("monthly-heading");
let annuallyTitle = document.getElementById("annually-heading");

monthlyTitle.classList.add("active");

let isMonthly = true;

button.addEventListener("click", function (event) {
  event.preventDefault();
  if (isMonthly == true) {
    button.setAttribute("style", "margin-left: unset;");
    document.getElementById("basic").innerHTML = "£" + priceBasicMonthly * 12;
    document.getElementById("professional").innerHTML =
      "£" + priceProfessionalMonthly * 12;
    document.getElementById("master").innerHTML = "£" + priceMasterMonthly * 12;
    isMonthly = false;
    monthlyTitle.classList.remove("active");
    annuallyTitle.classList.add("active");
  } else {
    button.setAttribute("style", "margin-left: auto;");
    document.getElementById("basic").innerHTML = "£" + priceBasicMonthly;
    document.getElementById("professional").innerHTML =
      "£" + priceProfessionalMonthly;
    document.getElementById("master").innerHTML = "£" + priceMasterMonthly;
    isMonthly = true;
    monthlyTitle.classList.add("active");
    annuallyTitle.classList.remove("active");
  }
});
