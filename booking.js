const emailInput = document.getElementById("emailInput");
const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");
const partyInput = document.getElementById("partyInput");

function submitBooking(e) {
  e.preventDefault();
  console.log(emailInput.value);
  console.log(dateInput.value);
  console.log(timeInput.value);
  console.log(partyInput.value);
}
