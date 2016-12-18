function grbn(request, sender, sendResponse) {
    var toDownload = getDownloadableContent(request.format);
    try {
        sendResponse({
            response: "osef",
            files: toDownload
        });
    }
    catch (e) {
        console.log(e);
    }
    return true;
}


function getDownloadableContent(format) {
    var links = $('#papers-content').find('.js-all-downloads-holder:first')
                                    .find('.js-platform.downloads.ebook.show')
                                    .find('a.a');

    var toDownload = [];

    console.log("HAHA");
    var lower_format = format.toLowerCase();

    for (var i = 0; i < links.length; i++) {
        var text = links[i].textContent;

        text = text.replace(/[\n\s]/g, "");

        if (text == format || text == format + "(HQ)") {
            toDownload.push({
                filename: links[i].parentNode
                                  .parentNode
                                  .getAttribute("data-subproduct") +
                                                "." +
                                                lower_format,
                url: links[i].getAttribute("data-web")
            });
        }
    }

    console.log("okdok");
    return toDownload;
}

browser.runtime.onMessage.addListener(grbn);
