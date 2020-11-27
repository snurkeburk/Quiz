

document .querySelector(".toggleDisplay") .addEventListener("click", toggleDivDisplay);
function toggleDivDisplay() {
   var x = document.querySelector(".div-visible");
   if (x.style.display === "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }
}