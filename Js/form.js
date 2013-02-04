/**
 * Fonctions liées aux différents formulaires
 * @author Christian Bonhomme
 * @version 1.0
 * @package Json7
 * 
 */

// Initialisation du tableau des fonctions d'affichage
var Tviews = new Array();
var i = 0;

/**
 * Affiche la boîte de sélection
 *
 * @return none
 */
Tviews[i++] = function viewSelect()
{
  changeContent('content', '../Php/json.php', 'EX=select', 'initSelect()');
	  	
}; // viewSelect()

/**
 * Affiche le champ d'input
 *
 * @return none
 */
Tviews[i++] = function viewInput()
{
  changeContent('content', '../Php/json.php', 'EX=input', 'initInput()');
  
}; // viewInput()

/**
 * Affiche les boutons radio
 *
 * @return none
 */
Tviews[i++] = function viewRadio()
{
  changeContent('content', '../Php/json.php', 'EX=radio', 'initRadio()');
	  
}; // viewRadio()

/**
 * Initialisation de l'écouteur change sur la boîte de sélection
 *
 * @return none
 */
function initSelect()
{
  change_select = document.getElementById('select');
  if (change_select)
  {
    if (change_select.addEventListener)
    {
      change_select.addEventListener('change', repSelect, false);
    } 
    else
    {
      change_select.attachEvent('onchange', repSelect);
    }
  }

} // initSelect()

/**
 * Affiche la réponse de la boîte de sélection
 *
 * @return none
 */
function repSelect()
{
  var param = 'EX=rep_select&VAL='+change_select.value;
  changeContent('reponse', '../Php/json.php', param);
	
} // viewSelect()

/**
 * Initialisation de l'écouteur keyup sur le champ input
 *
 * @return none
 */
function initInput()
{
  keyup_input = document.getElementById('input');
  if (keyup_input)
  {
    if (keyup_input.addEventListener)
    {
      keyup_input.addEventListener('keyup', repInput, false);
    } 
    else
    {
      keyup_input.attachEvent('onkeyup', repInput);
    }
  }

} // initInput()

/**
 * Affiche la réponse du champ input
 *
 * @return none
 */
function repInput()
{
  var param = 'EX=rep_input&VAL='+encodeURIComponent(keyup_input.value);
  changeContent('reponse', '../Php/json.php', param);
	
} // repInput()

/**
 * Initialisation des écouteurs click sur les boutons radio
 *
 * @return none
 */
function initRadio()
{
  click_radio = document.getElementsByTagName('input');
  if (click_radio)
  {
	var nb_radio = click_radio.length;
	for (var i = 0;  i < nb_radio; ++i)
	{
      if (click_radio[i].addEventListener)
      {
    	click_radio[i].addEventListener('click', repRadio, false);
      } 
      else
      {
    	click_radio[i].attachEvent('onclick', repRadio);
      }
	}
  }

} // initRadio()

/**
 * Affiche la réponse d'un bouton radio
 *
 * @return none
 */
function repRadio()
{
  var nb_radio = click_radio.length;
  for (var i = 0, param = '';  i< nb_radio; ++i)
  {
	// On vérifie quel bouton à été cliqué
    if (click_radio[i].checked)
    {
      param = 'EX=rep_radio&RADIO='+click_radio[i].value;
      break;
    }
  }	  
  changeContent('reponse', '../Php/json.php', param);
	
} // repRadio()
