<?php
/**
* 	@author Amilkhael Chávez Delgado;
*	Documento: Clase que modela la lógica de negocio de Aspirante
*/

	class AspiranteBO
	{

		//Constructor
		public function __construct()
		{

		}
		//Metodos
		public function insertarAspirante($datos_aspirante)
		{
			$bdconectada = new ConectaBD();
			$bdconectada->conectar();
			$datos_aspirante->nombre = $bdconectada->escapar_datos ($datos_aspirante->nombre);
			$datos_aspirante->correo = $bdconectada->escapar_datos ($datos_aspirante->correo);
			$datos_aspirante->celular = $bdconectada->escapar_datos ($datos_aspirante->institucion);
			
			$query = 'INSERT INTO PARTICIPANTE (NOMBRE, EMAIL, INSTITUCION, REGION_FK) VALUES ("'.$datos_aspirante->nombre.'","'.$datos_aspirante->correo.'","'.$datos_aspirante->institucion.'",(SELECT id FROM REGIONES WHERE NOMBRE = "'.$datos_aspirante->region.'"))';
			$bdconectada->escribir($query);
			$bdconectada->desconectar();
		}
		//Guardar registro de aspirante

		//Eliminar registros de aspirantes
	}


?>
