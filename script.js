function submitBooking() {
  const nameInput = document.getElementById("nameInput").value;
  const dateInput = document.getElementById("dateInput").value;
  const timeInput = document.getElementById("timeInput").value;
  const partyInput = document.getElementById("partyInput").value;

  const waURL = `https://wa.me/60167212991?text=Hi%21+I+came+across+your+ASAP+website+and+would+like+to+make+a+booking%21%0D%0AName%3A+${nameInput}%0D%0ADate%3A+${dateInput}%0D%0ATime%3A+${timeInput}%0D%0AParty+Size%3A+${partyInput}`;

  //validation
  if (nameInput.trim().length < 1 || dateInput.trim().length < 1) {
    console.log("validate warning");
  } else {
    window.location.href = waURL;
  }
}

const navbar = document.getElementById("navbar");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.background = "rgba(253, 186, 17, .95)";
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
  } else {
    navbar.style.background = "rgba(253, 186, 17, 0)";
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
  }
};
