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
  
  // localStorageSitesList.push(sitenameInputVal);
  localStorageSitesList[ sitenameInputVal ] = sitenameInputVal;
  localStorage.setItem('sites', JSON.stringify(localStorageSitesList));
});