const { app, BrowserWindow } = require("electron");

let mainWindow;
const browserWidth = 1000;
const browserHeight = 800;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: browserWidth,
        height: browserHeight,
        icon: __dirname + '/Icon/Icon.icns',
    });

    mainWindow.loadURL("https://www.xbox.com/en-US/play");
    mainWindow.on("closed", () => { 
        mainWindow = null; 
    });
};

app.on("ready", () => { 
    createWindow(); 
});

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function() {
  if (mainWindow === null) createWindow();
});
