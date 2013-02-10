<?php
/**
 * Fichier de mise en page
 * @author Ulysse Prygiel, Paul Tsnobiladzé, based on Christian Bonhomme's framework
 * @version 1.0
 * @package projetWeb
 */

global $page;

// Instanciation des class
$vhtml = new VHtml();
$vpage = new $page['class']();

?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="fr">
<head>
 <meta charset="utf-8" />
 <title><?= $page['title'] ?></title>
 <link rel="icon" type="image/png" href="../Img/projet.png" />
 <link rel="stylesheet" type="text/css" href="../Css/projet.css" />
</head>

<body id="projet">

<header>
 <?php $vhtml->showHtml('header.html') ?>
</header>

<div id="content">
 <?php $vpage->$page['method']($page['arg']) ?>
</div><!-- id="content" -->

<script src="../Js/projet.js"></script>

</body>
</html>
