chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['content.js']
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'updateIcon') {
    let iconPath = request.found ? 'devil48.png' : 'icon48.png';
    chrome.action.setIcon({path: iconPath, tabId: sender.tab.id});
  }
});
