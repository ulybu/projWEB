/**
 * Initialisation des écouteurs
 * @author Ulysse Prygiel, Paul Tsnobiladzé, based on Christian Bonhomme's framework
 * @version 1.0
 * @package projetWeb
 */

/**
 * Gestion du click sur un bouton de l'en-tête
 * avec appel de la fonction d'affichage correspondante
 */
var click_button = document.getElementById('entete').getElementsByTagName('button');
var nb_buttons = click_button.length;
for (var i = 0; i < nb_buttons; ++i)
{
  if (click_button[i].addEventListener)
  {
    click_button[i].addEventListener('click', Tviews[i], false);
  }
  else
  {
	  click_button[i].attachEvent('onclick', Tviews[i]);
  }
  
  click_button[i].style.cursor = 'pointer';
}

/*var butt_temp = document.getElementById('popup-text').getElementById('exit-butt-text');
  if (butt_temp.addEventListener)
  {
    butt_temp.addEventListener('click', exitNewText, false);
  }
  else
  {
	  butt_temp.attachEvent('onclick', exitNewText);
  }
  
  butt_temp.style.cursor = 'pointer';*/

initPage1();
initPage2();
