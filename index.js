var aprobe = true;

if (aprobe == true) {
    console.log("Puedo salir !!");
}

else {
    console.log("Tengo que seguir estudiando");
}

//CONDICIONAL SWITCH 

var color = prompt ("Ingrese un color");

switch (color){

    case "rojo":
    console.log("Es rojo");
    break;

    case "azul":
    console.log("Es azul");
    break;

    
    case "amarillo":
    console.log("Es amarillo");
    break;

    default:
        console.log("El color ingresado no es valido ");
}