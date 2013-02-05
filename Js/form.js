/**;
 * Fonctions liées aux différents formulaires
 * @author Christian Bonhomme
 * @version 1.0
 * @package Json7
 * 
 */

// Initialisation du tableau des fonctions d'affichage
var Tviews = new Array();
var i = 0;

function enterNewTitle(){
var title = document.getElementById('p1-titre2');
var colonne= title.parentNode;
var popup = document.getElementById('popup-title');
colonne.insertBefore(popup,title);
popup.style.visibility='visible';

initPopupTitle();

}
function exitNewTitle(){
	var popup = document.getElementById('popup-title');
	popup.style.visibility = 'hidden';
}
function exitNewText(){
	var popup = document.getElementById('popup-text');
	popup.style.visibility = 'hidden';

}
function enterNewText(){
	var popup = document.getElementById('popup-text');
	popup.style.visibility = 'visible';
	initPopupText();

}
function submitNewText(){
	var oldtext = document.getElementById('text1');
	var newtext = document.getElementById('newTextBox');
	oldtext.innerHTML  = newtext.value;
	exitNewText();

}
function submitNewTitle(){
	var oldtext = document.getElementById('p1-titre2');
	var newtext = document.getElementById('newTitleBox');
	oldtext.innerHTML  = newtext.value;
	exitNewTitle();

}
/**
 * Affiche la boîte de sélection
 *
 * @return none
 */
Tviews[i++] = function viewPage1()
{
  changeContent('content', '../Php/json.php', 'EX=page1', 'initPage1()');
	  	
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
function initPage1()
{
	var text_temp = document.getElementById('text1');
	var title_temp = document.getElementById('p1-titre2');
	  if (text_temp.addEventListener)
	  {
		text_temp.addEventListener('dblclick', enterNewText, false);
		title_temp.addEventListener('dblclick', enterNewTitle, false);
	  }
	  else
	  {
	    text_temp.attachEvent('ondblclick', enterNewText);
		title_temp.attachEvent('ondblclick', enterNewTitle);
		  
	  }
	
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
function initPopupTitle(){

	var butt_temp = document.getElementById('exit-butt-title');
	 var butt_sub = document.getElementById('submit-butt-title');
	  if (butt_temp.addEventListener)
	  {
		butt_temp.addEventListener('click', exitNewTitle, false);
		butt_sub.addEventListener('click', submitNewTitle, false);
	  }
	  else
	  {
		  butt_temp.attachEvent('onclick', exitNewTitle);
		   butt_sub.attachEvent('onclick', submitNewTitle);
		  
	  }	  
	 
	var oldtext1 = document.getElementById('p1-titre2');
	var newtext1 = document.getElementById('newTitleBox');
	newtext1.value = oldtext1.innerHTML;
	
	butt_temp.style.cursor = 'pointer';
	butt_sub.style.cursor = 'pointer';

}
function initPopupText(){

	var butt_temp = document.getElementById('exit-butt-text');
	 var butt_sub = document.getElementById('submit-butt-text');
	  if (butt_temp.addEventListener)
	  {
		butt_temp.addEventListener('click', exitNewText, false);
		butt_sub.addEventListener('click', submitNewText, false);
	  }
	  else
	  {
		  butt_temp.attachEvent('onclick', exitNewText);
		   butt_sub.attachEvent('onclick', submitNewText);
		  
	  }	  
	 
	var oldtext = document.getElementById('text1');
	var newtext = document.getElementById('newTextBox');
	newtext.value = oldtext.innerHTML;
	
	butt_temp.style.cursor = 'pointer';
	butt_sub.style.cursor = 'pointer';

}
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
