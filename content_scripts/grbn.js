function grbn(request, sender, sendResponse) {
    var toDownload = getDownloadableContent(request.format);
    try {
        sendResponse({
            response: "",
            files: toDownload
        });
    }
    catch (e) {
        console.log(e);
    }
    return true;
}


function getDownloadableContent(format) {
    var links = document.getElementsByClassName("js-all-downloads-holder")[0].firstChild.firstChild.firstChild;

    var toDownload = [];

    var lower_format = format.toLowerCase();

    for (var i = 4; i < links.childElementCount; i++) {

        var book = links.children[i].children[0];
        var bookName = book.getAttribute("data-human-name").replace(/ /g, "_") + '.' + lower_format;
        var bookUrls = book.children[2].children[0];
        var url = "";

        for (var j = 0; j < bookUrls.childElementCount; j++) {
            var label = bookUrls.children[j].children[0].children[0].children[1].innerHTML;
            if (label == format) {
                url += bookUrls.children[j].children[0].children[0].children[2].href;
                break;
            }
        }

        if (url == "") {
            throw "Download links for " + format + " were not found";
        }

        toDownload.push({
            filename: bookName,
            url: url
        });
        
    }

    return toDownload;
}

browser.runtime.onMessage.addListener(grbn);
