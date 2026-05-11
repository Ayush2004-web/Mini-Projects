function calculateBill()
{
    // Get Units
    let units =
        parseInt(document.getElementById("units").value);

    // Validation
    if(isNaN(units) || units <= 0)
    {
        alert("Please enter valid electricity units.");
        return;
    }

    // Variables
    let subtotal = 0;

    let slab1Units = 0;
    let slab2Units = 0;
    let slab3Units = 0;
    let slab4Units = 0;

    let slab1Charge = 0;
    let slab2Charge = 0;
    let slab3Charge = 0;
    let slab4Charge = 0;

    // First 50 Units
    if(units > 0)
    {
        slab1Units = Math.min(units,50);

        slab1Charge =
            slab1Units * 0.50;

        subtotal += slab1Charge;
    }

    // Next 150 Units
    if(units > 50)
    {
        slab2Units =
            Math.min(units - 50,150);

        slab2Charge =
            slab2Units * 0.75;

        subtotal += slab2Charge;
    }

    // Next 250 Units
    if(units > 200)
    {
        slab3Units =
            Math.min(units - 200,250);

        slab3Charge =
            slab3Units * 1.20;

        subtotal += slab3Charge;
    }

    // Above 450 Units
    if(units > 450)
    {
        slab4Units =
            units - 450;

        slab4Charge =
            slab4Units * 1.50;

        subtotal += slab4Charge;
    }

    // Surcharge
    let surcharge =
        subtotal * 0.20;

    // Grand Total
    let grandTotal =
        subtotal + surcharge;

    // Display Result
    let result =
    `
    <div class="bill-line">
        <span>First 50 Units (${slab1Units} × ₹0.50)</span>
        <span>₹${slab1Charge.toFixed(2)}</span>
    </div>

    <div class="bill-line">
        <span>51 - 200 Units (${slab2Units} × ₹0.75)</span>
        <span>₹${slab2Charge.toFixed(2)}</span>
    </div>

    <div class="bill-line">
        <span>201 - 450 Units (${slab3Units} × ₹1.20)</span>
        <span>₹${slab3Charge.toFixed(2)}</span>
    </div>

    <div class="bill-line">
        <span>Above 450 Units (${slab4Units} × ₹1.50)</span>
        <span>₹${slab4Charge.toFixed(2)}</span>
    </div>

    <hr>

    <div class="bill-line">
        <span>Subtotal</span>
        <span>₹${subtotal.toFixed(2)}</span>
    </div>

    <div class="bill-line surcharge">
        <span>20% Surcharge</span>
        <span>₹${surcharge.toFixed(2)}</span>
    </div>

    <hr>

    <div class="bill-line total">
        <span>Grand Total</span>
        <span>₹${grandTotal.toFixed(2)}</span>
    </div>
    `;

    document.getElementById("billDetails")
            .innerHTML = result;

    document.getElementById("resultCard")
            .style.display = "block";
}

// Reset Function
function resetBill()
{
    document.getElementById("units").value = "";

    document.getElementById("resultCard")
            .style.display = "none";
}