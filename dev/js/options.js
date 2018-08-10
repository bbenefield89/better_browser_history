const blackListedSitenamesList = document.querySelector('.blacklisted_sitenames_list');
const blacklistedSitenamesItem = document.createElement('li');

console.log(localStorage)

for (key in localStorage) {
  console.log(localStorage[ key ]);
}
