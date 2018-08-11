import BlackListedSiteNamesItem from './classes/BlackListedSiteNamesItem';

const blackListedSitenamesList = document.querySelector('.blacklisted_sitenames_list');

// create `sites` if it does not already exist in `localStorage`
if (!localStorage.getItem('sites'))
  localStorage.setItem('sites', '{}');

// parse `sites` from `localStorage`
// this is an easy way to store an "array" in `localStorage`
const localStorageSitesList = JSON.parse(localStorage.getItem('sites'));

// add a new site name to list for each item in `localStorage.getItem('sites')`
for (const site in localStorageSitesList) {
  // for information on the `BlackListedSiteNamesItem` class visit `./classes/BlackListedSiteNamesItem.js`
  const blacklistedSitenamesItem = new BlackListedSiteNamesItem(localStorageSitesList[ site ], 'li', blackListedSitenamesList);
  blacklistedSitenamesItem.insertElementIntoDom();
}