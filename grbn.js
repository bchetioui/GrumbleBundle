/*let { Cu } = require('chrome');
let { Downloads } = Cu.import("resource://gre/modules/Downloads.jsm");
let { TextDecoder, TextEncoder, OS } =
    Cu.import("resource://gre/modules/osfile.jsm");
let { Task } = Cu.import("resource://gre/modules/Task.jsm");
*/
/*var contextMenu = require("sdk/context-menu");

var menuItem = contextMenu.Item({
  label: "Download all the ebooks on this page (PDF)",
  context: contextMenu.URLContext("*.humblebundle.com"),
  contentScript: 'self.on("click", function () {' +
                 '  var links = getDownloadableContentPDF();' +
                 '  var tmpDir = OS.Constants.Path.tmpDir;' +

				 '  for (var i = 0; i < links.length; i++) {' +
				 '    var parent = links[i].parentNode.parentNode;' +
				 '    var filename = parent.data_download + ".pdf";' +
                 '    Task.spawn(function() {' +
                 '      yield Downloads.fetch(links[i].href,' +
                 '                            OS.Path.join(tmpDir,' +
                 '                                         filename));' +

                 '      console.log(filename + "has been downloaded.");' +
                 '    }).then(null, Cu.reportError);' +
                 '  }' +
                 '});',
  contentScriptFile: ["./jquery-3.1.0.min.js",
                      "./find-downloadable-content.js"]
});*/
