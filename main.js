const { app, BrowserWindow } = require('electron');
const path = require('path');


require('./src/airplay-server');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'src/preload.js'),
            contextIsolation: false,
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(`file://${path.join(__dirname, 'public/index.html')}`);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
