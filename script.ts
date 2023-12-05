import { exec } from 'child_process';
import * as os from 'os';

function emptyRecycleBin() {
    const platform: string = os.platform();

    if (platform === 'win32') {
        exec('rd /s /q C:\\$Recycle.Bin', (error, stdout, stderr) => {
            if (error) {
                console.error(`Hata oluştu: ${stderr}`);
            } else {
                console.log(`Çıktı: ${stdout}`);
            }
        });
    } else if (platform === 'linux' || platform === 'darwin') {
        exec('rm -rf ~/.local/share/Trash/*', (error, stdout, stderr) => {
            if (error) {
                console.error(`Hata oluştu: ${stderr}`);
            } else {
                console.log(`Çıktı: ${stdout}`);
            }
        });
    } else {
        console.log('Bu işletim sistemi desteklenmiyor.');
    }
}

emptyRecycleBin();
