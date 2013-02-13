/**
 * Fonctions liées aux boutons du header
 * @author Ulysse Prygiel, Paul Tsnobiladzé, based on Christian Bonhomme's framework
 * @version 1.0
 * @package projetWeb
 * 
 */


// Initialisation du tableau des fonctions d'affichage
var Tviews = new Array();
var i = 0;

/**
 * Affiche la page 1
 *
 * @return none
 */
Tviews[i++] = function viewPage1()
{
//   	changeContent('content', '../Php/projet.php', 'EX=page1', 'initPage1()');
	changeContent('content', '../Php/projet.php', 'EX=page1', 'initPage()');
	  	
}; // viewPage1()

/**
 * Affiche la page 2
 *
 * @return none
 */
Tviews[i++] = function viewPage2()
{
//   changeContent('content', '../Php/projet.php', 'EX=page2', 'initPage2()');
  changeContent('content', '../Php/projet.php', 'EX=page2', 'initPage()');
  
}; // viewPage2()


