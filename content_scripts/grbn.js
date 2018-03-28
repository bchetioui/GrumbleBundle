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

        switch (lower_format) {
            case "mobi":
                url += bookUrls.children[0].children[0].children[0].children[2].href;
                break;
            case "epub":
                url += bookUrls.children[1].children[0].children[0].children[2].href;
                break;
            case "pdf":
                url += bookUrls.children[2].children[0].children[0].children[2].href;
                break;
        }

        toDownload.push({
            filename: bookName,
            url: url
        });
        
    }

    return toDownload;
}

browser.runtime.onMessage.addListener(grbn);
