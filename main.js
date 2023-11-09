function tocaSom (idElementoAudio){
document.querySelectorAll(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll("tecla")

let contador = 0;
while(contador<listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onlick = function(){
        tocaSom("#som_tecla_aplausos");
        tocaSom(idAudio)
    }
    contador = contador + 1
    console.log(contador);
}