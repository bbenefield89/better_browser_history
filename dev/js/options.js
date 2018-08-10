const blackListedSitenamesList = document.querySelector('.blacklisted_sitenames_list');

// create `sites` if it does not already exist in `localStorage`
if (!localStorage.getItem('sites'))
  localStorage.setItem('sites', '{}');

// parse `sites` from `localStorage`
// this is an easy way to store an "array" in `localStorage`
const localStorageSitesList = JSON.parse(localStorage.getItem('sites'));

// add a new site name to list for each item in `localStorage.getItem('sites')`
for (site in localStorageSitesList) {
  const blacklistedSitenamesItem = document.createElement('li');

  blacklistedSitenamesItem.insertAdjacentText('afterbegin', localStorageSitesList[ site ]);
  blackListedSitenamesList.insertAdjacentElement('beforeend', blacklistedSitenamesItem);
}

for (let i = 0; i < blackListedSitenamesList.children.length; i++) {
  // add an event listener for each site name in teh list
  blackListedSitenamesList.children[ i ].addEventListener('click', function (e) {
    delete localStorageSitesList[ this.innerText ];  // delete site name from object
    localStorage.setItem('sites', JSON.stringify(localStorageSitesList));
    blackListedSitenamesList.removeChild(this);  // remove this element from the DOM
  });
}