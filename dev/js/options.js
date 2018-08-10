const blackListedSitenamesList = document.querySelector('.blacklisted_sitenames_list');

if (!localStorage.getItem('sites'))
  localStorage.setItem('sites', '[]');

localStorageSitesList = JSON.parse(localStorage.getItem('sites'));

localStorageSitesList.forEach(val => {
  const blacklistedSitenamesItem = document.createElement('li');

  blacklistedSitenamesItem.insertAdjacentText('afterbegin', val);
  blackListedSitenamesList.insertAdjacentElement('afterbegin', blacklistedSitenamesItem);
});
