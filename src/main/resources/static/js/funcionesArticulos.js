//llamado tabla articulos
$("#tablaArticulos").load("js/tablaArticulos.html");


function eliminarProducto(id){
	if(confirm("Esta seguro de eliminar el gasto?")){     
            $.ajax({
                type:"DELETE",
                url:"http://localhost:8090/deleteid/" + id,
                data:"id="+id, 
	
		});
		
		$("#eliminado").show("fast");
            
			//alerta de eliminar quitando en un tiempo
            setTimeout(function() {
                $("#eliminado").fadeOut();           
            },3500);

			$("#"+id).hide("slow");
		}
}