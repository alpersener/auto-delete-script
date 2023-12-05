"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var os = require("os");
function emptyRecycleBin() {
    var platform = os.platform();
    if (platform === 'win32') {
        (0, child_process_1.exec)('rd /s /q C:\\$Recycle.Bin', function (error, stdout, stderr) {
            if (error) {
                console.error("Hata olu\u015Ftu: ".concat(stderr));
            }
            else {
                console.log("\u00C7\u0131kt\u0131: ".concat(stdout));
            }
        });
    }
    else if (platform === 'linux' || platform === 'darwin') {
        (0, child_process_1.exec)('rm -rf ~/.local/share/Trash/*', function (error, stdout, stderr) {
            if (error) {
                console.error("Hata olu\u015Ftu: ".concat(stderr));
            }
            else {
                console.log("\u00C7\u0131kt\u0131: ".concat(stdout));
            }
        });
    }
    else {
        console.log('Bu işletim sistemi desteklenmiyor.');
    }
}
emptyRecycleBin();
