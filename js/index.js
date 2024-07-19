function calcular() {
    let a = parseInt(document.getElementById("valorA").value)
    let b = parseInt(document.getElementById("valorB").value)
    let c = parseInt(document.getElementById("valorC").value)
    
    if (a === 0) {
        alert("No se puede dividir entre cero")
    } else {
        let discriminante = b * b - 4 * a * c;

        if (discriminante < 0) {
            alert("La raíz cuadrada no puede ser negativa")
        } else {
            let x1 = (-b + Math.sqrt(discriminante)) / (2 * a)
            let x2 = (-b - Math.sqrt(discriminante)) / (2 * a)

            document.getElementById("valorResultadoX1").value = x1
            document.getElementById("valorResultadoX2").value = x2
        }
    }
}