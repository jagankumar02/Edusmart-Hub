// Load saved data
window.onload = () => {
  document.getElementById("name").value = localStorage.getItem("name") || "";
  document.getElementById("strong").value = localStorage.getItem("strong") || "";
  document.getElementById("weak").value = localStorage.getItem("weak") || "";

  if(localStorage.getItem("theme") === "dark"){
    document.getElementById("theme").checked = true;
    document.body.classList.add("dark");
  }
};

function saveSettings(){
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("strong", document.getElementById("strong").value);
  localStorage.setItem("weak", document.getElementById("weak").value);

  if(document.getElementById("theme").checked){
    localStorage.setItem("theme","dark");
  }else{
    localStorage.setItem("theme","light");
  }

  alert("Settings saved successfully ✅");
}