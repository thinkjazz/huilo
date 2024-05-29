const replacements = {
    'Путина': 'Хуйла',
    'путина': 'хуйла',
    'Путин': 'Хуйло',
    'путин': 'хуйло',
    'Путиным': 'Хуйлом',
    'путиным': 'хуйлом',
    'Пу́тин': 'Ху́йло',
    'Putin': 'Huilo',
    'putin': 'huilo',

  };
  
  const regex = new RegExp(Object.keys(replacements).join("|"), "gi");
  
  function replaceTextContent(textContent) {
    return textContent.replace(regex, (matched) => replacements[matched]);
  }
  
  function traverseAndReplace(node) {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
    let textNode;
    while (textNode = walker.nextNode()) {
      textNode.textContent = replaceTextContent(textNode.textContent);
    }
  }
  
  function replaceTextInDocument() {
    traverseAndReplace(document.body);
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "replaceText") {
      replaceTextInDocument();
      sendResponse({ status: "done" });
    }
  });
  