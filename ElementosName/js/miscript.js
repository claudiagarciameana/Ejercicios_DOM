window.onload=function(){
    //Obtener los botones
    const botonEnviar =document.getElementById('enviar');
    //Asignar vento al botón enviar
    botonEnviar.addEventListener('click',mostrar);
}
function mostrar(){
    let campos=document.getElementById("menu");
    campor.forEach(function(v){
        if(v.checked)
            alert("Eligiste"+v.value)
    });
}