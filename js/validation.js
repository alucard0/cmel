jQuery.validator.setDefaults({
	debug: true,
	success: "valid"
});

//Validador de solo letras (Incluye caracteres especiales de otros idiomas)
$.validator.addMethod( "lettersonly", function( value, element ) {
return this.optional( element ) || /^[a-z.áéíóúñâêîôûäëïöüàèìòùçæøåğş']+$/i.test( value );
}, "Letters only please" );

//Redefinicion Del Validador de e-mail
$.validator.methods.email = function( value, element ) {
  return this.optional( element ) || /^[a-z 0-9.áéíóúñâêîôûäëïöüàèìòùçæøåğş'*+-/=?_{|}~]+@[a-z 0-9.áéíóúñâêîôûäëïöüàèìòùçæøåğş'*+-/=?_{|}~]+.[a-z 0-9]+$/i.test( value );
}

$( "#registroForm" ).validate({
  rules: {
	cmpNombre: {
		required: true,
		lettersonly: true
	},
	cmpInstitucion: {
		required: true,
		lettersonly: true
	},
    cmpMail: {
    	required: true,
		email: true
    }
  },
  messages: {
  	  cmpNombre:{
		required: "Campo Requerido",
		lettersonly: "Carácter inválido"
	  
	  },
	  cmpInstitucion:{
		required: "Campo Requerido",
		lettersonly: "Carácter inválido"
	  
	  },
  	  cmpMail:{
  	  	required: "Campo Requerido",
  	  	email: "Ingresa un email válido"
  	  }
	}
});


/*Funcion para Registrar al Aspirante*/
jQuery(function($){
  $('#btnEnviar').on('click', function (ev) {
    /*Obtener los valores del formulario*/
    var nombre=$("#cmpNombre").val(); /*Obligatorio*/ 
    console.log(nombre);
    var correo=$("#cmpMail").val();
    console.log(correo); 
	var institucion=$("#cmpInstitucion").val();
	console.log(institucion); 
	var region=$("#cmpRegion").val();
	console.log(region);
	
    if($('#registroForm').valid())
    {
	  $('.btnEnviar').disabled = true;
      $.ajax({
        url: "controlador/controladorRegistro.php",
        type: "POST",
        data: {"nombre":nombre,"correo":correo,"institucion":institucion,"region":region},
        success: function (data) {
	
          /*Mostrar mensaje de enviado*/
			console.log('Success');
			document.getElementById("registroForm").reset();
			$("#Ventana_Exito").modal('toggle');
			$('.btnEnviar').disabled = false;
			
        },
		error: function (data) {
			console.log('Error');
		}
      });
    }
  });
});