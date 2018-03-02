<?php
include_once 'modelo/ConectaBD.php';

	class DesplegarRegion{
		//Constructor
		public function __construct()
		{

		}
		//Metodos
		public function despliega()
		{	
			$bd = new ConectaBD;
			$bd->conectar();		
			$query = 'SELECT NOMBRE FROM regiones';
			$tipos = $bd->escribir($query);
			
		
			while ($fila = mysqli_fetch_row($tipos)){
				echo '<option value="'.$fila[0].'">'.$fila[0]."</option>\n";
			}
			$bd->desconectar();
		}
	}
?>