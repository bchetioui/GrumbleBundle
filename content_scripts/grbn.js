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

        // Getting the span element containing the relevant format
        var formatSpan = Array.from(bookUrls.querySelectorAll('span')).find(el => el.textContent === format);

        if (formatSpan != undefined) {

            toDownload.push({
                filename: bookName,
                url: formatSpan.parentElement.children[2].href
            });
        }
        else {
            console.log("Warning: " + book.getAttribute("data-human-name") + " can't be found in " + format + " format.");
        }
    }

    return toDownload;
}

browser.runtime.onMessage.addListener(grbn);
