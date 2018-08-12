/**
 * @summary script that is ran on the `popup.html` portion of this extension
 * 
 * @description Handles adding a new site to the users list of black listed sites to prevent them
 * from showing up on a users Google Chrome browser history
 * 
 * @author Brandon Benefield
 * @since 1.0.0
 * @version 1.0.0
 */

// loads in the less file(s) for this script/html page
require('../less/popup.less');
 
const submitSitenameButton  = document.querySelector('.sitename_form__sitename_submit_button');
const sitenameInput         = document.querySelector('.sitename_form__sitename_input');

// check if `sites` is defined in localStorage
// if not then create it as an empty array (technically it's a string)
if (!localStorage.getItem('sites'))
  localStorage.setItem('sites', '{}');

const localStorageSitesList = JSON.parse(localStorage.getItem('sites'));

// add new sites to `localStorage`
submitSitenameButton.addEventListener('click', e => {
  e.preventDefault();

  const sitenameInputVal = sitenameInput.value;
  
  localStorageSitesList[ sitenameInputVal ] = sitenameInputVal;
  localStorage.setItem('sites', JSON.stringify(localStorageSitesList));
});