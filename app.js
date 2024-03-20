const textArea = document.querySelector(".texto1");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value)
    mensaje.value=textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage="none";

}

function encriptar(stringEncriptado) {
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado=stringEncriptado.toLowerCase();

    for(let i= 0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado=desencriptar(textArea.value)
    mensaje.value=textoDesencriptado
    textArea.value="";
    mensaje.style.backgroundImage="none";
    

}

function desencriptar(stringDesencriptado) {
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado=stringDesencriptado.toLowerCase();

    for(let i= 0; i<matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}

function showBackgroundImage() {
    var textarea = document.getElementById("encriptado");
    var backgroundImage = "url(imagenes/desktop-wallpaper-would-jim-play-the-riddler-again-batman-forever-riddler.jpg)"; 

    // Si el textarea está vacío, muestra la imagen de fondo
    if (textarea.value.trim() === "") {
        textarea.style.backgroundImage = backgroundImage;
    } else {
        textarea.style.backgroundImage = "none";
    }
}

function copiarTexto() {
    // Selecciona el texto del textarea
    var textarea = document.querySelector(".mensaje");
    textarea.select();
    

    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Deselecciona el texto del textarea
    textarea.setSelectionRange(0, 0);
}
