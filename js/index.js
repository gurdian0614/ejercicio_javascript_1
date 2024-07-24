function calcular() {
    let strA = document.getElementById("valorA").value
    let strB = document.getElementById("valorB").value
    let strC = document.getElementById("valorC").value

    if (strA === "") {
        warning("Valor a, en blanco")
    } else if (strB === "") {
        warning("Valor b, en blanco")
    } else if (strC === "") {
        warning("Valor c, en blanco")
    } else {
        let a = parseInt(strA)
        let b = parseInt(strB)
        let c = parseInt(strC)
        
        if (a === 0) {
            warning("No se puede dividir entre cero")
        } else {
            let discriminante = b * b - 4 * a * c;
    
            if (discriminante < 0) {
                warning("La raíz cuadrada no puede ser negativa")
            } else {
                let x1 = (-b + Math.sqrt(discriminante)) / (2 * a)
                let x2 = (-b - Math.sqrt(discriminante)) / (2 * a)
    
                document.getElementById("valorResultadoX1").value = x1
                document.getElementById("valorResultadoX2").value = x2
            }
        }
    }
}

function warning(mensaje) {
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: mensaje
    });
}

function limpiar() {
    document.getElementById("valorA").value = ""
    document.getElementById("valorB").value = ""
    document.getElementById("valorC").value = ""
    document.getElementById("valorResultadoX1").value = ""
    document.getElementById("valorResultadoX2").value = ""
}