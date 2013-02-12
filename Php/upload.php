<?php
//echo $_FILES['image']['type'];
$maxsize = 3000000;
if ($_FILES['image']['error'] > 0) {
	$erreur = "Erreur lors du transfert";
	}
if ($_FILES['image']['size'] > $maxsize) 
	{$erreur = "Le fichier est trop gros";
	}

$extensions_valides = array( 'jpg' , 'jpeg' , 'gif' , 'png' );

$extension_upload = strtolower(  substr(  strrchr($_FILES['image']['name'], '.')  ,1)  );

  $upload_dir = "../Img/";
  $resultat = move_uploaded_file($_FILES['image']['tmp_name'],$upload_dir.$nom);
?>