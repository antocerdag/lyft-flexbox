(function scroll(){
	var navBarNuevo = document.getElementsByClassName("navDos");
	var distscroll= window.pageYOffset || document.documentElement.scrollTop;
	if (distscroll > 300 ){
		//alert("hola");
		navBarNuevo.classList.remove("hide");
	}
})();
