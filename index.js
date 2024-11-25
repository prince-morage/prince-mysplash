let mainlist = document.getElementById("mainlist")
mainlist.style.maxWidth = "0px";
// mainlist.style.maxHeight = "0px";

function toggleMenu(){
  if(mainlist.style.maxWidth == "0px")
    {
      mainlist.style.maxWidth ="1000px"
  }
  else{
    mainlist.style.maxWidth= "0px";
  }


//   if(mainlist.style.maxHeight == "0px"){

//     mainlist.style.maxHeight ="500px"
// }
// else{
//   mainlist.style.maxHeight= "0px";
// }
  
}