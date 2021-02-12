//Funcion tabla Compra
	$(document).ready(function(){
	     $("#compras").load("compras.html");
	});
	
	
	//Funcion tabla Pedido
	$(document).ready(function(){
	     $("#pedidos").load("pedidos.html");
	});
	
	//Funcion tabla Gastos
	$(document).ready(function(){
	     $("#gastos").load("gastos.html");
	});
	
	//Funcion tabla Gastos
	$(document).ready(function(){
	     $("#articulos").load("articulos.html");
	});
	
	//esconder todas la tablas menos pedidos
	function funcionPedidos(){
		$("#pedidos").show("slow");	
		$("#compras").hide("slow");
		$("#gastos").hide("slow");
		$("#articulos").hide("slow");
	}
	
	//esconder todas la tablas menos pedidos
	function funcionCompras(){
		$("#compras").show("slow");
		$("#pedidos").hide("slow");
		$("#gastos").hide("slow");
		$("#articulos").hide("slow");	
	}
	
	//esconder todas la tablas menos pedidos
	function funcionGastos(){
		$("#gastos").show("slow");
		$("#pedidos").hide("slow");
		$("#compras").hide("slow");	
		$("#articulos").hide("slow");
	}
	
	//esconder todas la tablas menos pedidos
	function funcionArticulos(){
		$("#articulos").show("slow");
		$("#pedidos").hide("slow");
		$("#gastos").hide("slow")	
		$("#compras").hide("slow");
	}
	