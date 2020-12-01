//Detta är till för att man ska displaya ämnen efter att ha valt inriktning
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

//-----------------------------------------------------------------------------//

//Detta är till för att displaya "utveckla varför" efter att man har valt minst en klass 
document .querySelector(".checkboxEttwebb") .addEventListener("click", toggleDivDisplay);
document .querySelector(".checkboxEttdao") .addEventListener("click", toggleDivDisplay);
document .querySelector(".checkboxEttfys") .addEventListener("click", toggleDivDisplay);
document .querySelector(".checkboxEttmat") .addEventListener("click", toggleDivDisplay);
document .querySelector(".checkboxEttpro") .addEventListener("click", toggleDivDisplay);
document .querySelector(".checkboxEttsve") .addEventListener("click", toggleDivDisplay);
function toggleDivDisplay() {
   var k = document.querySelector(".ett");
   var y = document.querySelector("#två");
   var h = document.querySelector("#OBS");

   if(k.clicked == true){
      k.style.display = "none";
      y.style.display = "none";
      h.style.dispaly = "none";
   } else {
      k.style.display = "block";
      y.style.display = "block";
      h.style.display = "none";

   }
  
}
}
//-----------------------------------------------------------------------------//

