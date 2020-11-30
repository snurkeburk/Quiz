
document .querySelector(".teknikCiv") .addEventListener("click", toggleDivDisplay);
document .querySelector(".teknikSpel") .addEventListener("click", toggleDivDisplay);
document .querySelector(".El") .addEventListener("click", toggleDivDisplay);
document .querySelector(".Estet") .addEventListener("click", toggleDivDisplay);

function toggleDivDisplay() {
   var x = document.querySelector(".div-visible-civ");

   if(x.clicked == true){
      x.style.display = "block";
   } else {
      x.style.display = "block";
   }



// 
document .querySelector(".checkboxEttwebb") .addEventListener("click", toggleDivDisplay);
document .querySelector(".checkboxEttdao") .addEventListener("click", toggleDivDisplay);
document .querySelector(".checkboxEttfys") .addEventListener("click", toggleDivDisplay);
document .querySelector(".checkboxEttmat") .addEventListener("click", toggleDivDisplay);
document .querySelector(".checkboxEttpro") .addEventListener("click", toggleDivDisplay);
document .querySelector(".checkboxEttsve") .addEventListener("click", toggleDivDisplay);
function toggleDivDisplay() {
   var k = document.querySelector(".ett");
   var y = document.querySelector("#två");

   if(k.clicked == true){
      k.style.display = "none";
      y.style.display = "none";
   } else {
      k.style.display = "block";
      y.style.display = "block";

   }
  
}
}
