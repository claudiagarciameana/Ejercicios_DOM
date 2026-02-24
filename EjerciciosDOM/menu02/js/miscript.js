window.onload=function(){

    let boton=document.geyElementById("btnMenu");
    let menu =document.getElementById("menu");
    boton.addEventListener("click",function(){

        menu.classList.toggle("mostrar");
    });
}