function login(){
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if(email === "" || pass === ""){
    alert("Please fill all details");
    return;
  }

  // Demo login
  window.location.href = "homepage.html";
}