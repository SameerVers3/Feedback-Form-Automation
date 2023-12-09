document.getElementById('randomButton').addEventListener('click', function() {
    console.log('Button clicked; sending message to background script.');
    chrome.runtime.sendMessage({ action: 'randomlySelect' });
    
});

document.getElementById('positive').addEventListener('click', function() {
    console.log('Button clicked; sending message to background script.');
    chrome.runtime.sendMessage({ action: 'positive' });
});

document.getElementById('negative').addEventListener('click', function() {
    console.log('Button clicked; sending message to background script.');
    chrome.runtime.sendMessage({ action: 'negative' });
});


document.getElementById('neutral').addEventListener('click', function() {
    console.log('Button clicked; sending message to background script.');
    chrome.runtime.sendMessage({ action: 'neutral' });
});