var inicioUsuarios = function(){

	var validaUsuario = function(){
		var usuario = $("#txtUsuario".val());
		var clave = $"#txtClave".val();
		var parametros ="opcion=valida"+"&usuario"+usuario+"&clave"+clave+"&id="+Math.random();
		if(usuario!="" && clave!=""){

		$.ajax({
			cache:false,type:"POST",dataType:"json",url:"php/utilerias.php",data:parametros,success: function(response){
				if(response.respuesta==true){
					$("#entradaUsuario").hide("slow");
					$("nav").show("slow");
				}

			},
			error: function(xhr,ajaxOptions,thrownError){
				
			}
		});


		}
		else {
			alert("Usuario y clave son Obligatorios")
		}


	} 
	$("#btnValidaUsuario").on("click",validaUsuario)
}
$(document).on("ready",inicioUsuarios);