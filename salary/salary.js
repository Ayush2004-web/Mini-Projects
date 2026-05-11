// Salary Calculation Function
function calculateGrossSalary(basic) {
  // 20%
   let hra = basic * 0.2;
  // 80%
  let da = basic * 0.8;
  let gross = basic + hra + da;
  return {
    basic,
    hra,
    da,
    gross,
  };
}

function formatCurrency(amount) {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
}
function startCalculation() {
  let salary = document.getElementById("basicSalary").value;
  let error = document.getElementById("error");
  let resultCard = document.getElementById("resultCard");
  let successMessage = document.getElementById("successMessage");
  let calculateBtn = document.getElementById("calculateBtn");
  let spinner = document.getElementById("spinner");
  error.innerHTML = "";
  successMessage.classList.add("d-none");
  if (salary === "" || isNaN(salary) || Number(salary) < 0) {
    error.innerHTML = "Please enter a valid salary greater than or equal to 0.";
    resultCard.style.display = "none";
    return;
  }
  salary = parseFloat(salary);
  calculateBtn.disabled = true;
  spinner.classList.remove("d-none");

  setTimeout(function () {

    let data = calculateGrossSalary(salary);

    let output = `
        <div class="result-line">
            <span>Basic Salary</span>
            <span>${formatCurrency(data.basic)}</span>
        </div>

        <div class="result-line">
            <span>HRA (20%)</span>
            <span>${formatCurrency(data.hra)}</span>
        </div>

        <div class="result-line">
            <span>DA (80%)</span>
            <span>${formatCurrency(data.da)}</span>
        </div>

        <hr>

        <div class="result-line gross">
            <span>Gross Salary</span>
            <span>${formatCurrency(data.gross)}</span>
        </div>
        `;
    document.getElementById("result").innerHTML = output;
    resultCard.style.display = "block";
    successMessage.classList.remove("d-none");
    calculateBtn.disabled = false;
    spinner.classList.add("d-none");
  }, 500);
}

function resetForm() {
  document.getElementById("basicSalary").value = "";
  document.getElementById("resultCard").style.display = "none";
  document.getElementById("successMessage").classList.add("d-none");
  document.getElementById("error").innerHTML = "";
}
