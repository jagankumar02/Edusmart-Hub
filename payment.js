const params = new URLSearchParams(window.location.search);

document.getElementById("mentorName").innerText =
  params.get("mentor") || "Mentor";

document.getElementById("price").innerText =
  params.get("price") || "0";

function payNow(){
  alert("Payment Successful 🎉\nSession Booked!");
  window.location.href = "mentor.html";
}