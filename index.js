const anchoA4 = 796;
const altoA4 = 1123;

const img = new Image();

img.onload = function() {
    let ancho = this.width;
    let alto = this.height;

    orientacion(ancho, alto);

    console.log("La relación de aspecto inicial es de: " + this.width + 'PX x ' + this.height + 'PX');
}

img.src = 'https://img.freepik.com/foto-gratis/manzana-habitacion-sucia-pintura-patron_1203-5709.jpg?size=626&ext=jpg&ga=GA1.2.962766771.1583377449';

function orientacion (ancho, alto){
    //identificamos en que orientación ingresa la imagen 1=horizontal, 2=vertical, 3=cuadrado
    var guia;
    if (ancho > alto){
        guia = 1;
    }else if(ancho < alto){
        guia = 2;
    }else{
        guia = 3;
    }
    convertir (guia, ancho, alto);
}

function convertir (guia, ancho, alto){
    //establecemos en que orientación se debe ubicar la hoja A4 de acuerdo a la orientación en la que ingresa la imagen
    var colocacion;
    if (guia === 1){
        colocacion = "horizontal"
    }else if(guia === (2 ||3)){
        colocacion = "vertical"
    }
    console.log("La orientación que debe tomar la hoja A4 debe ser: " + colocacion)
    dimensiones(colocacion, ancho, alto)
}

function dimensiones (colocacion, ancho, alto){
    //redimensionamos el tamaño de la imagen de acuerdo a la orientación que va a tomar la hoja A4
    if(colocacion == "horizontal"){
        if(ancho > altoA4){
            let nuevoAncho = altoA4;
            let nuevoAlto = (alto * altoA4)/ancho;
            
            //Si aún después de redimensionar la imagen el alto sigue siendo mayor al que permite la hoja a A4, se vuelve a redimensionar la imagen
            if(nuevoAlto > anchoA4){
                let nuevoAltoModificado = anchoA4;
                let nuevoAnchoModificado = (nuevoAncho * anchoA4)/nuevoAlto
                console.log("El ancho de la imagen debe ser de " + nuevoAnchoModificado + "PX");
                console.log("El alto de la imagen debe ser de " + nuevoAltoModificado + "PX");
            }else{
                console.log("El ancho de la imagen debe ser de " + nuevoAncho + "PX");
                console.log("El alto de la imagen debe ser de " + nuevoAlto + "PX");
            }

        }else if (ancho <= altoA4){
            console.log("El ancho de la imagen debe ser de " + ancho + "PX");
            console.log("El alto de la imagen debe ser de " + alto + "PX");
        }        
    }else{
        if(alto > altoA4){
            let nuevoAlto = altoA4;
            let nuevoAncho = (ancho * altoA4)/alto;
            

            //Si aún después de redimensionar la imagen el ancho sigue siendo mayor al que permite la hoja a A4, se vuelve a redimensionar la imagen
            if(ancho >anchoA4){
                let nuevoAnchoModificado = anchoA4;
                let nuevoAltoModificado = (nuevoAlto * anchoA4)/nuevoAncho;
                console.log("El ancho de la imagen debe ser de " + nuevoAnchoModificado + "PX");
                console.log("El alto de la imagen debe ser de " + nuevoAltoModificado + "PX");
            }else{
                console.log("El ancho de la imagen debe ser de " + nuevoAncho + "PX");
                console.log("El alto de la imagen debe ser de " + nuevoAlto + "PX");
            }

        }else if (alto <= altoA4){
            console.log("El ancho de la imagen debe ser de " + ancho + "PX");
            console.log("El alto de la imagen debe ser de " + alto + "PX");
        }
    }
}