browser.tabs.executeScript(null, { file: "/content_scripts/jquery-3.1.0.min.js" });
browser.tabs.executeScript(null, { file: "/content_scripts/grbn.js" });

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("page-choice")) {
    return;
  }

  var chosenFormat = e.target.textContent;
  
  var gettingActiveTab = browser.tabs.query({ active: true,
                                              currentWindow: true});
  
  gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id,
                               {format: chosenFormat},
                               responseHandler);  
  });
});


function onStartedDownload(id) {
    console.log("Started downloading: " + id);
}


function onFailed(error) {
    console.log("Download failed: " + error);
}


function downloadFiles(files) {

    try {
        for (var i = 0; i < files.length; i++) {
            var downloading =
                browser.downloads.download({
                    url: files[i].url,
                    filename: files[i].filename
                });

            downloading.then(onStartedDownload, onFailed);
        }
    }
    catch (e) {
        alert(e);
    }
}


function responseHandler(response) {
    downloadFiles(response.files);
}
