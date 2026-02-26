window.onload=function(){
    //Obtener los botones
    const botonCopiar=document.getElementById('copiar');
    //Asignar evento al botón de copiar
    botonCopiar.addEventListener('click',fCopiar);
}
function fCopiar(){
    //Contenido a copiar
    let textoParaCopiar=document.querySelector(".texto").textContent;
    //elemento donde tengo que copiar el contenido
    let destino= document.querySelector("p");
    destino.textContentContent=textoParaCopiar;
}