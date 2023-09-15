const open = document.getElementsByClassName("open_me")[0];
const modal_container = document.getElementsByClassName("modal_div")[0];
const close =  document.getElementsByClassName("close_me")[0];



open.addEventListener("click" , () =>{
  modal_container.style.display = "block";
  
  setTimeout(function(){
    modal_container.style.display = "none";;
},15000); // 12 seconds
});





