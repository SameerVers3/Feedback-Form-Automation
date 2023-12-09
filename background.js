chrome.runtime.onInstalled.addListener(function () {
  console.log("Extension Installed");
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    console.log("Page loaded completely");
    chrome.tabs.sendMessage(
      tabId,
      { action: "pageLoaded" },
      function (response) {
        console.log("Content script response:", response);
      }
    );
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "randomlySelect") {
    console.log("Randomly selecting...");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "randomlySelect" });
    });
  }
  if (request.action === "positive") {
    console.log("positive selecting...");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "positive" });
    });
  }

  if (request.action === "negative") {
    console.log("negative selecting...");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "negative" });
    });
  }

  if (request.action === "neutral") {
    console.log("neutral selecting...");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "neutral" });
    });
  }
  // Ensure that the listener returns true for asynchronous responses
  return true;
});
