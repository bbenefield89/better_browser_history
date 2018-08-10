const rules = {
  conditions: [ new chrome.declarativeContent.PageStateMatcher({ pageUrl: { schemes: [ 'https', 'http' ] } }) ],
  actions: [ new chrome.declarativeContent.ShowPageAction() ]
};

chrome.runtime.onInstalled.addListener(details => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([ rules ])
  });
});