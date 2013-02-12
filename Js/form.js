/**
 * Fonctions liées aux différents formulaires
 * @author Ulysse Prygiel, Paul Tsnobiladzé, based on Christian Bonhomme's framework
 * @version 1.0
 * @package projetWeb
 * 
 */

var page;

function enterNewTitle(evt){
//var title = document.getElementById('titre2');
var title = evt.target;
var colonne= title.parentNode;
var popup = document.getElementById('popup-title');
colonne.insertBefore(popup,title);
popup.style.visibility='visible';

initPopupTitle();

}

function enterNewImg(){
var popup = document.getElementById('popup-img');
var img = document.getElementById('image');
var colonne = img.parentNode;
//img.appendChild(popup);
colonne.insertBefore(popup,img);
popup.style.visibility='visible';

initPopupImg();

}
function exitNewImg(){
	var popup = document.getElementById('popup-img');
	popup.style.visibility = 'hidden';
}


function initPopupImg(){
	var butt_temp = document.getElementById('exit-butt-img');
	var butt_sub = document.getElementById('submit-butt-img');
	var input_tem = document.getElementById('input-img');
	if (butt_temp.addEventListener)
	{
		butt_temp.addEventListener('click', exitNewImg, false);
		butt_sub.addEventListener('click', submitNewImg, false);
		input_tem.addEventListener('change', changeNewImg, false);
	}
	else
	{
		butt_temp.attachEvent('onclick', exitNewImg);
		butt_sub.attachEvent('onclick', submitNewImg);
		input_tem.attachEvent('onchange', changeNewImg);
	}	  
	var preview = document.getElementById('preview');
	var img = document.getElementById('image');

	preview.src=img.src;

	butt_temp.style.cursor = 'pointer';
	butt_sub.style.cursor = 'pointer';

}

function changeNewImg(evt){
 var preview =  document.getElementById('preview');
 preview.src= evt.target.files[0].name;
}
function submitNewImg(){

	exitNewImg();

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
function changeNewImg(evt){
 var preview =  document.getElementById('preview');
 preview.src= evt.target.files[0].name;
}
function submitNewImg(){

	exitNewImg();

}
function submitNewText(evt){
	var oldtext = document.getElementById('text1');
	var newtext = document.getElementById('newTextBox');
	oldtext.innerHTML  = newtext.value;
	exitNewText();

}
function submitNewTitle(){
	var oldtext = document.getElementById('titre2');
	var newtext = document.getElementById('newTitleBox');
	oldtext.innerHTML  = newtext.value;
	exitNewTitle();

}



/**
 * Initialisation de la page 1
 *
 * @return none
 */
function initPage1()
{
	var text_temp = document.getElementById('text1');
	var title_temp = document.getElementById('titre2');
	var img_temp = document.getElementById('image');
	  if (text_temp.addEventListener)
	  {
		text_temp.addEventListener('dblclick', enterNewText, false);
		title_temp.addEventListener('dblclick', enterNewTitle, false);
		img_temp.addEventListener('dblclick', enterNewImg, false);
	  }
	  else
	  {
	    text_temp.attachEvent('ondblclick', enterNewText);
		title_temp.attachEvent('ondblclick', enterNewTitle);
		img_temp.attachEvent('ondblclick', enterNewImg);
		  
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
  page = 'page1';
} // initPage1()

/**
 * Initialisation de la page 2
 *
 * @return none
 */
function initPage2()
{
	var text_temp = document.getElementById('text1');
	var title_temp = document.getElementById('titre2');
	var img_temp = document.getElementById('image');
	  if (text_temp.addEventListener)
	  {
		text_temp.addEventListener('dblclick', enterNewText, false);
		title_temp.addEventListener('dblclick', enterNewTitle, false);
		img_temp.addEventListener('dblclick', enterNewImg, false);
	  }
	  else
	  {
	    text_temp.attachEvent('ondblclick', enterNewText);
		title_temp.attachEvent('ondblclick', enterNewTitle);
		img_temp.attachEvent('ondblclick', enterNewImg);
		  
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
  page = 'page2';
} //initPage2()

function initPopupImg(){
	var butt_temp = document.getElementById('exit-butt-img');
	 var butt_sub = document.getElementById('submit-butt-img');
	 var input_tem = document.getElementById('input-img');
	  if (butt_temp.addEventListener)
	  {
		butt_temp.addEventListener('click', exitNewImg, false);
		butt_sub.addEventListener('click', submitNewImg, false);
		input_tem.addEventListener('change', changeNewImg, false);
	  }
	  else
	  {
		  butt_temp.attachEvent('onclick', exitNewImg);
		  butt_sub.attachEvent('onclick', submitNewImg);
		  input_tem.attachEvent('onchange', changeNewImg);

	  }	  

	var preview = document.getElementById('preview');
	var img = document.getElementById('image');

	preview.src=img.src;

	butt_temp.style.cursor = 'pointer';
	butt_sub.style.cursor = 'pointer';

}
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
	var oldtext1 = document.getElementById('titre2'); 
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
  changeContent('reponse', '../Php/projet.php', param);
	
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
  changeContent('reponse', '../Php/projet.php', param);
	
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
  changeContent('reponse', '../Php/projet.php', param);
	
} // repRadio()