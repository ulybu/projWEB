<?php
/**
 * Fichier de mise en page
 * @author Christian Bonhomme
 * @version 1.0
 * @package json7
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
 <title><?php echo $page['title']; ?></title>
 <link rel="icon" type="image/png" href="../Img/json.png" />
 <link rel="stylesheet" type="text/css" href="../Css/json.css" />
</head>

<body id="json">

<header>
 <?php $vhtml->showHtml('header.html') ?>
</header>

<div id="content">
 <?php $vpage->$page['method']($page['arg']) ?>
</div><!-- id="content" -->

<script src="../Js/json.js"></script>
</body>
</html>
