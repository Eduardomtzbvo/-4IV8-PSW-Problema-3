function problema3(){
    let letras = document.querySelector('#p3-input').value;
    let palabras = letras.split(",");
    let palabra_mayor = "";
 
    for(let word of palabras){
        if(word.length > palabra_mayor.length){
        palabra_mayor = word;
 
        var letras_num = palabra_mayor.split("");
        var num = letras_num.length;
        }
    }
    
    document.querySelector('#p3-output').textContent = 'La palabra con más caracteres es: ' + palabra_mayor + ' ' + num + ' (' + letras + ')' ;
}