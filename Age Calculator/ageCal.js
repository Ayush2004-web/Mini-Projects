document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const dob = document.getElementById("DOB").value;
  const currentDate = document.getElementById("currentDate").value;

// const Age = current year - dob year doing below
  const Age = Number(currentDate.split("-")[0]) - Number(dob.split("-")[0]);
 
  document.getElementById("DOB").value="";
  document.getElementById("currentDate").value="";

  document.getElementById("MyAge").innerText = Age;

});
