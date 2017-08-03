function cambionav(){

	var navBarNuevo = document.getElementById("nav-bar"); // llamo el nav que esta oculto
	var logo= document.getElementById('logo-white');
	var distscroll= window.pageYOffset || document.documentElement.scrollTop;
	if (distscroll > 100 ){ // al hacer scroll se debe eliminar la clase hide del nav que esta oculto
		document.getElementById('nav-bar').classList.add('hide');
        document.getElementById('navDos').classList.remove('hide');

	}else{
		document.getElementById('navDos').classList.add('hide');
        document.getElementById('nav-bar').classList.remove('hide');
	}
};
window.addEventListener('scroll' , cambionav)

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


