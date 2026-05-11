function calculateTip()
{
    const billAmount = document.getElementById("billAmount").value;
    const service = document.getElementById("service").value;
    const people = document.getElementById("people").value;
    if(billAmount === "" || service === "" || people === "")
    {
        alert("Please Fill All Fields");
        return;
    }
    billAmount = parseFloat(billAmount);
    service = parseFloat(service);
    people = parseInt(people);
    const tipAmount = billAmount * service;
    const totalBill = billAmount + tipAmount;
    const perPerson = totalBill / people;
    document.getElementById("finalAmount")
            .innerHTML = perPerson.toFixed(2);
    document.getElementById("resultBox")
            .style.display = "block";
}