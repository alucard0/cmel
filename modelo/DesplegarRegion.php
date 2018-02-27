<?php
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
			$query = 'SELECT NOMBRE FROM REGIONES';
			$tipos = $bd->escribir($query);
			$bd->desconectar();
		
			while ($fila = mysqli_fetch_row($tipos)){
				echo '<option value="'.$fila[0].'">'.$fila[0]."</option>\n";
			}
		
		}
	}
?>