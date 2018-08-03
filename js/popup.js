// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function (data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function (element) {
//   let color = element.target.value;

//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.executeScript(
//       tabs[0].id,
//       { code: 'document.body.style.backgroundColor = "' + color + '";' }
//     );
//   });
// };

const text = document.querySelector('h1');

text.addEventListener('click', () => {
  const query = {
    text: '',
    startTime: 0,
    endTime: Date.now(),
    maxResults: 0
  };
  
  chrome.history.search(query, history => {
    for (website of history)
      console.log(website);
  });
});