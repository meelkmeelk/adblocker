const defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://*creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true}},
    { urls: defaultFilters },
    ["blocking"]
  );