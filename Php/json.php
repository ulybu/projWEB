<?php
/**
 * Travaux Pratiques : Json7

 * Fichier du contrôleur
 * @author Christian Bonhomme

 * @version 1.0

 * @package Json7
 */
 

// Encodage de l'application en UTF-8
header 
 ('Content-Type: text/html; charset=utf-8');


 // Récupération de l'autoload
require 
 ('../Lib/tools.lib.php');


 // Récupération de la variable de contrôle
 
$EX = isset ($_REQUEST['EX']) ? $_REQUEST['EX'] : 'home';
 

// Contrôleur

 switch ($EX)
{
	case 'home'   : home();   break;
	case 'page1' : page1(); exit;
	case 'input'  : input();  exit;
	case 'radio'  : radio();  exit;
	case 'rep_select' : rep_select(); exit;
	case 'rep_input'  : rep_input();  exit;
	case 'rep_radio'  : rep_radio();  exit;
}

// Récupération de la mise en page
 
require('../View/layout.view.php');


/********* Fonctions de contrôle *********/


/**
 * Affiche la page d'accueil
 *

 * @return none
 */

function home ()
{
	global $page;

	$page['title'] = 'Accueil';
	$page['class'] = 'VHtml';
	$page['method'] = 'showHtml';
	$page['arg'] = 'home.html';

} // home ()

/**
 * Affiche la boîte de sélection
 *
 * @return none
 */
function page1 ()
{
	$vhtml = new VHtml();
	$vhtml->showHtml('page1.html');
	
} // select ()

/**
 * Affiche le champ d'input
 *
 * @return none
 */
function input ()
{
	$vhtml = new VHtml();
	$vhtml->showHtml('input.html');
	
} // input ()

/**
 * Affiche les boutons radio
 *
 * @return none
 */
function radio ()
{
	$vhtml = new VHtml();
	$vhtml->showHtml('radio.html');
	
} // select ()

/**
 * Affiche la réponse de la boîte de sélection
 *
 * @return none
 */
function rep_select ()
{
	echo '<strong>' . $_POST['VAL'] . '</strong>';

} // rep_select ()

/**
 * Affiche la réponse du champ d'input
 *
 * @return none
 */
function rep_input ()
{
  echo '<strong>' . strrev($_POST['VAL']) . '</strong>';

} // rep_input ()

/**
 * Affiche la réponse d'un bouton radio
 *
 * @return none
 */
function rep_radio ()
{
	echo '<span style="background-color:yellow">'.$_POST['RADIO'].'</span>';

} // rep_radio ()
?>
