$("#tablaPedidos").load("js/tablaPedidos.html");


function btnAgregarPedidos(){
	$("#formPedidos").show("slow");
	$("#btnAgregarPedidos").hide("slow");
	$("#btnAgregarCancelarPedidos").show("slow");
}

function btnAgregarEsconder(){
	$("#formPedidos").hide("slow");
	$("#btnAgregarPedidos").show("slow");
	$("#btnAgregarCancelarPedidos").hide("slow");
}

//registrar producto
$(document).ready(function () {
	$(document).delegate('#regGasto', 'click', function (event) {
		event.preventDefault();
		var idGasto = $('#idGasto').val();
		var descripcionGasto = $('#descripcionGasto').val();
		var valorTotal = $('#valorTotal').val();
		var idProveedor = $('#idProveedor').val();
	
		console.log(idGasto);
		console.log(descripcionGasto);
		console.log(valorTotal);
		console.log(idProveedor);
	
		
		var formData = new FormData();
		
		var objArr = [];

		objArr.push({ "idGasto": idGasto, "descripcionGasto": descripcionGasto, "valorTotal": valorTotal, "idProveedor": idProveedor });
		console.log(objArr);
 
		formData.append('gasto', JSON.stringify(objArr));
		console.log(formData);

		$.ajax({
			type: "POST",
			url: "http://localhost:8090/gasto",
			data: formData,
			cache: false,
			processData: false,
			contentType: false,
			success: function (result) {
				console.log(result);
				$.alert({
						title: 'OK',
						content: 'El integrante ha sido publicado!',
					});
				/*setTimeout(
					function () {
						window.location.href = "listarJugadores.html";
					},2000);*/
			},
			error: function (xhr, exception) {
				if (xhr.status === 0)
					alert('Error : ' + xhr.status + 'You are not connected.');
				else if (xhr.status == "409"){
					$.alert({
						title: 'Error',
						content: 'Este nombre de integrante ya existe!',
					});
				}
				else if (xhr.status == "404")
					alert('Error : ' + xhr.status + '\nPage note found');
				else if (xhr.status == "500")
					alert('Internal Server Error [500].');
				else if (exception === 'parsererror')
					alert('Error : ' + xhr.status + '\nImpossible to parse result.');
				else if (exception === 'timeout')
					alert('Error : ' + xhr.status + '\nRequest timeout.');
				else
					alert('Error .\n' + xhr.responseText);
			}
		});
	});
});	




//eliminar gasto
function eliminarPedido(id){
	if(confirm("Esta seguro de eliminar el gasto?")){     
            $.ajax({
                type:"DELETE",
                url:"http://localhost:8090/delete/" + id,
                data:"id="+id, 
	
		});
		
		$("#eliminado").show("fast");
            
			//alerta de eliminar quitando en un tiempo
            setTimeout(function() {
                $("#eliminadoPedidos").fadeOut();           
            },3500);

			$("#"+id).hide("slow");
		}
} 

