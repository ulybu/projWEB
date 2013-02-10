/**
 * Fichier Javascript appelant tous les autres fichiers
 * @author Ulysse Prygiel, Paul Tsnobiladzé, based on Christian Bonhomme's framework
 * @version 1.0
 * @package projetWeb
 * 
 */

var src = new Array();
var i = 0;

src[i++] = '../Js/header.js';
src[i++] = '../Js/form.js';
src[i++] = '../Js/ajax.js';
src[i++] = '../Js/init.js';

for (var j = 0; j < i; ++j)
{
  document.write('<script language="javascript" type="text/javascript" src="' + src[j] + '"></script>');
}
