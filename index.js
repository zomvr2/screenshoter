const { app, BrowserWindow, Menu, MenuItem } = require('electron');
const path = require('path');
const { electron } = require('process');

const createWindow = () => {
  const mainWindow = new BrowserWindow({

    width: 250,
    height: 300,
    resizable: false,
    alwaysOnTop: true,
    x: 10,
    y: 10,
    icon: 'public/images/logo.png',
    webPreferences: {
        devTools: false
    }

  });

  mainWindow.loadFile('public/index.html');

}

let win = BrowserWindow.getFocusedWindow();

const menu = new Menu();
menu.append(new MenuItem({
    label: "Screenshot",
    accelerator: process.platform === "darwin" ? "Cmd+S" : "Shift+S",
    click: (e) => { 
        console.log("Screenshot")
    }
}));

Menu.setApplicationMenu(menu);

app.whenReady().then(() => {

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });

});

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') app.quit()

});