window.addEventListener("load", inicio, true);

function  inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
     this.value = this.value.toUpperCase();
    }, true);
    
    document.getElementById("Cifrar").addEventListener("click", function(){
       let texto = document.getElementById("mensaje").value;
       let desplazamiento = document.getElementById("desplazamiento").value;
       document.getElementById("mensaje2").value = Cifrar2(texto, desplazamiento);
}, true);

    document.getElementById("Descifrar").addEventListener("click", function(){
    let texto = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("mensaje2").value = Descifrar(texto, desplazamiento);
}, true);

}

function Cifrar(texto, desplazamiento){
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto){
       for (let i = 0; i<texto.length; i++){
           if (letras.indexOf(texto[i])!=-1){
              let position = ((letras.indexOf(texto[i])+desplazamiento)%26);
               resultado += letras[position];
       } 
       else 
           resultado += texto[i];
    }
  }
  return resultado;
}

function Cifrar2 (texto, desplazamiento) {
    if (!texto)
        return"";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]);
}

function Descifrar (texto, desplazamiento) {
    if (!texto)
        return"";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 - 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26]);
}