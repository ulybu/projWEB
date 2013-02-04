/**
 * Initialisation des écouteurs
 * @author Christian Bonhomme
 * @version 1.0
 * @package Json7
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
