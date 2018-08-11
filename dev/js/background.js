const rules = {
  conditions: [ new chrome.declarativeContent.PageStateMatcher({ pageUrl: { schemes: [ 'https', 'http' ] } }) ],
  actions: [ new chrome.declarativeContent.ShowPageAction() ]
};

chrome.runtime.onInstalled.addListener(details => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([ rules ])
  });
});

// checks if `sites` has been set in `localStorage` and creates it if false
if (!localStorage.getItem('sites'))
  localStorage.setItem('sites', '{}');

  // add an event listener to the `history.onVisited` method to check the URL for every site being navigated to
  chrome.history.onVisited.addListener(siteData => {
    // grabs a hash of black listed websites saved as a string (actually an object) in the users `localStorage`
    // because `localStorage` can only hold strings of key/val pairs we need to parse this from string => object
    blackListedSites = JSON.parse(localStorage.getItem('sites'));

    // grab the string that exists in between the `www.` and `.com` of a URL
    // EX: user black lists a site by referring to it as `example` in the extensions `popup` (popup.html)
    //     when a user navigates to `http://www.example.com` this will grab the `example` portion of the URL
    // this regex will also work for `http://`, `https://`, and URL's that DO NOT contain a `www.` sequence of characters preceding the domain name
    const urlPattern = siteData.url.match(/https?:\/{2}w?w?w?\.?(\w+)./);

    // conditional checks if the capture group from `urlPattern` is a valid key on the `blackListedSites` object
    if (blackListedSites[ urlPattern[1] ]) {
      // if true we then delete this URL a long with all occurences of this URL prior to this call as well
      // for clarity this mean that before installing `Better Browsing History` if you navigated to `http://www.example.com`
      // and now have black listed `http://www.example/com` then ALL occurrences of `http://www.example.com` will now be removed from your history
      chrome.history.deleteUrl({ url: siteData.url });
    }
  });