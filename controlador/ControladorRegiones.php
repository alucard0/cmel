<?php
	include_once 'modelo/ConectaBD.php';
	include_once 'modelo/DesplegarRegion.php';
		
		$oferta = new DesplegarRegion;
		$oferta->despliega();

?>