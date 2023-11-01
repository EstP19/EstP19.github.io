
    

function Enviar1() {
    var Pr = document.getElementById("Pr").value;

    var pal = Pr.toLowerCase().split(" ");
    
    var palabrasUnicas= {};

    for (var i = 0; i < pal.length; i++) {
        var palabra = pal[i];
        palabrasUnicas[palabra] = true;
    }
   
    var cPal = Object.keys(palabrasUnicas).length;;

    document.getElementById("res1").innerHTML = "Número de palabras: " + cPal;

}


  function Enviar2(){
    // Paso 1
var Cont = document.getElementById("Cont").value;
var res2 = document.getElementById("res2");


if (Cont.length < 8) {
    res2.textContent = "La contraseña debe tener mínimo 8 caracteres.";
} else if (!/[A-Z]/.test(Cont)) {
    res2.textContent = "La contraseña debe contener mínimo una letra mayúscula.";
} else if (!/\d/.test(Cont)) {
    res2.textContent = "La contraseña debe contener mínimo un número.";
} else if (/\s/.test(Cont)) {
    res2.textContent = "La contraseña no debe contener espacios en blanco.";
} else {
    res2.textContent = "La contraseña es válida.";
}
}

function Enviar3() {

    
        var pal1 = document.getElementById("Pal1").value;
        var pal2 = document.getElementById("Pal2").value;

        
        function ordenarCadena(cadena) {
            return cadena.toLowerCase().split('').sort().join('');
        }

        if (ordenarCadena(pal1) === ordenarCadena(pal2)) {
            document.getElementById("res3").textContent = "¡Son anagramas!";
        } else {
            document.getElementById("res3").textContent = "No son anagramas.";
        }
    


}


function Enviar4() {

    var ing = document.getElementById("Ing").value;

    ing = ing.replace(/a/g, '!');
    ing = ing.replace(/e/g, '#');
    ing = ing.replace(/i/g, '$');
    ing = ing.replace(/o/g, '%');
    ing = ing.replace(/u/g, '&');

    document.getElementById("res4").textContent = "Palabra Sin Vocales: " + ing;
}


function Enviar5() {
    var Parr = document.getElementById("Parr").value;
    var palC = document.getElementById("PalC").value;

  
    if (Parr.includes(palC)) {
        document.getElementById("res5").textContent = "La palabra clave *"+palC+"* aparece en la cadena.";
    } else {
        document.getElementById("res5").textContent = "La palabra clave *"+palC+"* no aparece en la cadena.";
    }
}

function Enviar6() {
    
    
        var parrafo = document.getElementById("Par").value;

        var palabras = parrafo.split(" ");

        
        palabras = palabras.filter(function (palabra) {
            return palabra.trim() !== "";
        });

       
        var cantidadPalabras = palabras.length;

        document.getElementById("res6").textContent = "Número de palabras: " + cantidadPalabras;
    }

  
    
    function Enviar7() {
        var cadena = document.getElementById("Ic").value;

        function invertir(cadena) {
            var cadenaInvertida = "";
            for (var i = cadena.length - 1; i >= 0; i--) {
                cadenaInvertida += cadena[i];
            }
            return cadenaInvertida;
        }

        var cadenaInvertida = invertir(cadena);
        document.getElementById("res7").textContent = "Resultado de la Cadena Invertida: " + cadenaInvertida;
    }

    
      
    var frutas = ["fresa", "pera", "manzana", "uva", "banana", "naranja", "sandía", "mango", "piña", "plátano", "kiwi", "papaya", "chontaduro", "melone", "limone", "araza", "zapote", "caimo", "guama", "pomorroso","Granadilla","Gulupa","Guanábana","Tomate de árbol","Uchuva","Maracuyá" ,"Pitahaya"];

    function Enviar8() {
        var frutaIngresada = document.getElementById("CA").value.toLowerCase();

        if (frutas.includes(frutaIngresada)) {
            document.getElementById("res8").textContent = "La Fruta se Encuentra Disponible";
        } else {
            document.getElementById("res8").textContent = "La Fruta no se Encuentra Disponible";
        }
    }

    
    function Enviar9() {
        var cadena = document.getElementById("Mm").value;
        var cadenaMayusculas = cadena.toUpperCase();
        document.getElementById("res9").textContent = "Párrafo Mayúsculas: " + cadenaMayusculas;
    }

    function Enviar10() {
        var cadena = document.getElementById("Mm").value;
        var cadenaMinusculas = cadena.toLowerCase();
        document.getElementById("res9").textContent = "Párrafo Minúsculas: " + cadenaMinusculas;
    }

    
    function mostrarLongitudes() {
        var oracion = document.getElementById("Oracion").value;
        var palabras = oracion.split(" ");

        var tablaResultados = document.getElementById("tablaR");
        tablaResultados.innerHTML = "";

        for (var i = 0; i < palabras.length; i++) {
            var palabra = palabras[i];
            var longitud = palabra.length;

            var fila = document.createElement("tr");
            var celdaPalabra = document.createElement("td");
            var celdaLongitud = document.createElement("td");

            celdaPalabra.textContent = palabra;
            celdaLongitud.textContent = longitud;

            fila.appendChild(celdaPalabra);
            fila.appendChild(celdaLongitud);

            tablaResultados.appendChild(fila);
        }
    }

    
    var numeros = [];

    function agregarNumero() {
        var numero = parseInt(document.getElementById("N").value);
        if (!isNaN(numero)) {
            numeros.push(numero);
            document.getElementById("N").value = "";
            actualizarArrays();
        }
    }

    function actualizarArrays() {
        var listaOriginal = document.getElementById("arrayOriginal");
        listaOriginal.innerHTML = "";
        numeros.forEach(function(numero) {
            var elementoLista = document.createElement("li");
            elementoLista.textContent = numero;
            listaOriginal.appendChild(elementoLista);
        });
    }

    function duplicarElementos() {
        var numerosDuplicados = numeros.map(function(numero) {
            return numero * 2;
        });

        var listaDuplicada = document.getElementById("arrayDuplicado");
        listaDuplicada.innerHTML = "";
        numerosDuplicados.forEach(function(numero) {
            var elementoLista = document.createElement("li");
            elementoLista.textContent = numero;
            listaDuplicada.appendChild(elementoLista);
        });
    }

    
    function modificarPalabras() {
        var palabrasInput = document.getElementById("Palabras").value;
        var palabras = palabrasInput.split(",");

        var palabrasModificadas = palabras.map(function(palabra) {
            return cambiarMayusculasMinisculas(palabra);
        });

        var listaModificada = document.getElementById("listaModificada");
        listaModificada.innerHTML = "";
        palabrasModificadas.forEach(function(palabra) {
            var elementoLista = document.createElement("li");
            elementoLista.textContent = palabra;
            listaModificada.appendChild(elementoLista);
        });
    }

    function cambiarMayusculasMinisculas(palabra) {
        var palabraModificada = "";
        for (var i = 0; i < palabra.length; i++) {
            var caracter = palabra[i];
            if (caracter === caracter.toUpperCase()) {
                palabraModificada += caracter.toLowerCase();
            } else {
                palabraModificada += caracter.toUpperCase();
            }
        }
        return palabraModificada;
    }

