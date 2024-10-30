// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "searchYoutube",
    "title": "Search YouTube for '%s'",
    "contexts": ["selection"]
  });
});

// Add click event
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "searchYoutube") {
    const searchText = encodeURIComponent(info.selectionText);
    const url = `https://www.youtube.com/results?search_query=${searchText}`;
    chrome.tabs.create({ url: url });
  }
});
