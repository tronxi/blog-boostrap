function inicializar() {
    var articulos = document.getElementsByClassName("articulo");
    var botones = document.getElementsByClassName("boton");

for (let i = 0; i < articulos.length; i++) {
  articulos[i].onmouseover = function(){mostrar(i)};
  articulos[i].onmouseout = function(){salir(i)};
}

function mostrar(x){
    botones[x].style.visibility = "visible";
}

function salir(x){
    botones[x].style.visibility = "hidden";
}

}
window.addEventListener("load", inicializar, false);
