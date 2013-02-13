/**
 * Fonctions liées aux différents formulaires
 * @author Ulysse Prygiel, Paul Tsnobiladzé, based on Christian Bonhomme's framework
 * @version 1.0
 * @package projetWeb
 * 
 */

var temp_title;
var temp_text;

function enterNewTitle(evt){
// 	var title = evt.target;
	temp_title = evt.target;
	var colonne= temp_title.parentNode;
	var popup = document.getElementById('popup-title');
	colonne.insertBefore(popup,temp_title);
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
// evt.target.parentNode.remove
	var butt_sub = document.getElementById('submit-butt-title');
	butt_sub.removeEventListener('click', submitNewTitle, false);
	var popup = document.getElementById('popup-title');
	popup.style.visibility = 'hidden';
}
function exitNewText(){
	var popup = document.getElementById('popup-text');
	popup.style.visibility = 'hidden';

}
function enterNewText(evt){
	temp_text = evt.target;
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
function submitNewText(){
// 	var oldtext = document.getElementById('text1');
	var oldtext = temp_text;
	var newtext = document.getElementById('newTextBox');
	oldtext.innerHTML  = newtext.value;
	exitNewText();

}
function submitNewTitle(){
	var oldtext = temp_title;
	var newtext = document.getElementById('newTitleBox');
	oldtext.innerHTML  = newtext.value;
	exitNewTitle();

}

/**
 * Initialisation de la page
 *
 * @return none
 */
function initPage()
{
	var text1_temp = document.getElementById('text1');
	var text2_temp = document.getElementById('text2');
	var text3_temp = document.getElementById('text3');
	var title2_temp = document.getElementById('titre2');
	var title3_temp = document.getElementById('titre3');
	var img_temp = document.getElementById('image');
	  if (text1_temp){
		  if (text1_temp.addEventListener)
		  {
			text1_temp.addEventListener('dblclick', enterNewText, false);
			text2_temp.addEventListener('dblclick', enterNewText, false);
			text3_temp.addEventListener('dblclick', enterNewText, false);
			title2_temp.addEventListener('dblclick', enterNewTitle, false);
			title3_temp.addEventListener('dblclick', enterNewTitle, false);
			img_temp.addEventListener('dblclick', enterNewImg, false);
		  }
		  else
		  {
			text1_temp.attachEvent('ondblclick', enterNewText);
			text2_temp.attachEvent('ondblclick', enterNewText);
			text3_temp.attachEvent('ondblclick', enterNewText);
			title2_temp.attachEvent('ondblclick', enterNewTitle);
			title3_temp.attachEvent('ondblclick', enterNewTitle);
			img_temp.attachEvent('ondblclick', enterNewImg);  
		  }
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
} // initPage()



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
		butt_sub.addEventListener('click',  submitNewTitle, false);
	  }
	  else
	  {
		  butt_temp.attachEvent('onclick', exitNewTitle);
		   butt_sub.attachEvent('onclick', submitNewTitle);
		  
	  }	  
	var newtext1 = document.getElementById('newTitleBox');
	newtext1.value = temp_title.innerHTML;
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
	 
// 	var oldtext = document.getElementById('text1');
	var oldtext = temp_text;
	var newtext = document.getElementById('newTextBox');
	newtext.value = oldtext.innerHTML;
	
	butt_temp.style.cursor = 'pointer';
	butt_sub.style.cursor = 'pointer';

}
