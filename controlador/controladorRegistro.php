<?php
include_once '../modelo/Aspirante.php';
include_once '../modelo/AspiranteBO.php';


$aspirante = new Aspirante($_POST);
$aspiranteLogica = new AspiranteBO();

$aspiranteLogica->insertarAspirante($aspirante);
?>