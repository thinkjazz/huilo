document.getElementById('replaceButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "replaceText" }, (response) => {
        console.log(response.status);
      });
    });
  });
  