import data from '../data.json';

const submitSitenameButton  = document.querySelector('.sitename_form__sitename_submit_button');
const sitenameInput         = document.querySelector('.sitename_form__sitename_input');
const pattern               = new RegExp('triplebyte', 'i')

const query = {
  text: '',
  startTime: 0,
  endTime: Date.now(),
  maxResults: 0
};

// check if `sites` is defined in localStorage
// if not then create it as an empty array (technically it's a string)
if (!localStorage.getItem('sites'))
  localStorage.setItem('sites', '[]');

const localStorageSitesList = JSON.parse(localStorage.getItem('sites'));

// add new sites to `localStorage`
submitSitenameButton.addEventListener('click', e => {
  e.preventDefault();

  const sitenameInputVal = sitenameInput.value;
  
  localStorageSitesList.push(sitenameInputVal);
  localStorage.setItem('sites', JSON.stringify(localStorageSitesList));
});

// chrome.history.search(query, history => {
//   history.forEach(website => {
//     console.log(website.url + '\n')
    
//     if (website.url.match(pattern)) {
//       console.log(website)
//     }
//   });
// });