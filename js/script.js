function mostrarImporte(){
    var tipoSeguro = document.getElementById("seguroId").value
    switch(tipoSeguro){
        case "1":
            document.getElementById("importeSeguro").innerHTML="$ 500"
            break
        case "2":
            document.getElementById("importeSeguro").innerHTML="$ 1000"
            break;
        case "3":
            document.getElementById("importeSeguro").innerHTML="$ 1500"
            break;
        default:
            document.getElementById("importeSeguro").innerHTML="$ 500"
         break;
        
    }
    console.log(mostrarImporte)
}
mostrarImporte()