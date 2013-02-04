<?php
/**
 * Class d'affichage d'un fichier html
 * @author Christian Bonhomme
 * @version 1.0
 * @package Json7
 *
 */
class VHtml
{

  /**
   * Constructeur
   * @access public
   *        
   * @return none
   */
  public function __construct(){}

  /**
   * Destructeur
   * @access public
   *        
   * @return none
   */
  public function __destruct(){}

  /**
   * Affiche le fichier html
   * @access public
   * @string nom du fichier html à afficher
   *        
   * @return none
   */
  public function showHtml($_html)
  {
    $html = '../Html/' . $_html;
    if (is_file($html))
    {
      require_once($html);
    }
    else
    {
      require_once('../Html/unknown.html');
    }
    
  } // showHtml($_html)

} // VHtml
?>