window.onscroll = function() {

	var navBarNuevo = document.getElementsByClassName("navDos"); // llamo el nav que esta oculto
	var distscroll= window.pageYOffset || document.documentElement.scrollTop;
	if (distscroll > 300 ){ // al hacer scroll se debe eliminar la clase hide del nav que esta oculto
		navBarNuevo.classList.remove("hide");
	}
};

/* VALIDACION FORMULARIO */ 

var phone = document.getElementById("phone");
phone.onclick = function(){
	var span = document.getElementById("inputnuevo");
	var inputFirstName = document.createElement("input");
	inputFirstName.setAttribute("id", "firstName");
	inputFirstName.setAttribute("placeholder", "First Name");
}

var boton = document.getElementById("become-driver");
boton.onclick = function(){
	function phone(){
		var phone = document.getElementById("phone").value;
		
		if( !(/^\d{9}$/.test(phone)) ) { //Validación para ingresar 9 numeros
 			alert("Please enter a valid phone number");
		}
	}
	phone();
}


