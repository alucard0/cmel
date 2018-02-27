<?php
/**
* 	@author Amilkhael Chávez Delgado;
*	Documento: Clase que modela la tabla Oferta Educativa
*/
	class Aspirante
	{

		//Atributos
		private $idAspirante;
		private $nombre;
		private $correo;
		private $institucion;
		private $region;

		//Constructor
		public function __construct($post)
		{
			$this->nombre = $post['nombre'];
			$this->correo = $post['correo'];
			$this->institucion = $post['institucion'];
			$this->region = $post['region'];
		}
		//Metodos
		public function __set($name,$value){
		    if(method_exists($this, $name)){
		      $this->$name($value);
		    }
		    else{
		      /* Getter/Setter not defined so set as property of object*/
		      $this->$name = $value;
		    }
		}

		public function __get($name){
		    if(method_exists($this, $name)){
		      return $this->$name();
		    }
		    elseif(property_exists($this,$name)){
		      /* Getter/Setter not defined so return property if it exists*/
		      return $this->$name;
		    }
		    return null;
		}


	}


?>