// Function
function calculateBill() {
  let km = document.getElementById("km").value;
  let error = document.getElementById("error");
  let resultCard = document.getElementById("resultCard");
  error.innerHTML = "";
  if (km === "" || isNaN(km) || Number(km) < 0) {
    error.innerHTML = "Please enter a non-negative number of kilometres.";
    resultCard.style.display = "none";
    return;
  }

  km = parseFloat(km);

  let slab1Km = 0;
  let slab2Km = 0;
  let slab3Km = 0;

  let slab1Cost = 0;
  let slab2Cost = 0;
  let slab3Cost = 0;

  //10 km
  slab1Km = Math.min(km, 10);
  slab1Cost = slab1Km * 11;

  //40 km
  if (km > 10) {
    slab2Km = Math.min(km - 10, 40);
    slab2Cost = slab2Km * 10;
  }

  //50 km
  if (km > 50) {
    slab3Km = km - 50;
    slab3Cost = slab3Km * 8;
  }

  let total = slab1Cost + slab2Cost + slab3Cost;

  function formatNumber(value) {
    return value.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  document.getElementById("totalBill").innerHTML = "Rs. " + formatNumber(total);

  let details = `
    <div class="break-line">
        <span>${slab1Km.toFixed(2)} km × Rs.11</span>
        <span>Rs. ${formatNumber(slab1Cost)}</span>
    </div>

    <div class="break-line">
        <span>${slab2Km.toFixed(2)} km × Rs.10</span>
        <span>Rs. ${formatNumber(slab2Cost)}</span>
    </div>

    <div class="break-line">
        <span>${slab3Km.toFixed(2)} km × Rs.8</span>
        <span>Rs. ${formatNumber(slab3Cost)}</span>
    </div>
    `;

  document.getElementById("breakdown").innerHTML = details;
  resultCard.style.display = "block";
}
