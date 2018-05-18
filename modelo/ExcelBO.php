<?php
	include_once '../modelo/ConectaBD.php';
	class ExcelBO
	{
		//Constructor
		public function __construct()
		{

		}
		//Metodos
		public function generarExcel($ArcivoExcel)
		{	
			//Abrir Cookie de sesion
			//session_start();
			
			//Conectar a la BD
			$bdconectada = new ConectaBD();
			$bdconectada->conectar();
			
			//Guardar en vitacora
			//$query = 'INSERT INTO action_log (Accion) VALUES ("Descargar BD")';
			//$bdconectada->escribir($query);
			
			//Mandar a traer la base de datos
			$query = 'SELECT participante.NOMBRE, participante.INSTITUCION, participante.EMAIL, regiones.NOMBRE FROM participante, regiones WHERE regiones.id = participante.id ORDER BY regiones.id ASC, participante.INSTITUCION ASC, participante.NOMBRE ASC';
			$query = $bdconectada->escribir($query);
			
			
			//Escribir encabezados en el archivo Excel
			$ArcivoExcel->seleccionar_hoja (0);
			$ArcivoExcel->escribir_dato('A1', 'Nombre');
			$ArcivoExcel->escribir_dato('C1', 'Correo');
			$ArcivoExcel->escribir_dato('B1', 'Institución');
			$ArcivoExcel->escribir_dato('D1', 'Región');
			
		
			//Escribir la informacion en el archivo Excel
			$i = 2;
			while ($fila = mysqli_fetch_row($query)) {
				
				$ArcivoExcel->escribir_dato('A'.$i, $fila[0]);
				$ArcivoExcel->escribir_dato('B'.$i, $fila[1]);
				$ArcivoExcel->escribir_dato('C'.$i, $fila[2]);
				$ArcivoExcel->escribir_dato('D'.$i, $fila[3]);
				
				$i ++;
			}
			
			mysqli_free_result($query);

			
			//Ajustar el ancho de las columnas de Excel
			$ArcivoExcel->auto_ajustar_columna ('A');
			$ArcivoExcel->auto_ajustar_columna ('B');
			$ArcivoExcel->auto_ajustar_columna ('C');
			$ArcivoExcel->auto_ajustar_columna ('D');

			
			//Guardar Archivo de Excel
			$ArcivoExcel->guardar_archivo('../index.xlsx');
			
			/* liberar el conjunto de resultados */
			mysqli_free_result($query);
		
			//Cerrat BD
			$bdconectada->desconectar();
			
		}
	}

?>
