const { app, BrowserWindow } = require("electron");

let mainWindow;
let needsFocusFix = false;
let triggeringProgrammaticBlur = false;


app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,

    })

mainWindow.loadURL(`File://${__dirname}/index.html`)
mainWindow.setMenuBarVisibility(false)
})

app.on('blur', (event) => {
    if(!triggeringProgrammaticBlur) {
      needsFocusFix = true;
    }
  })

  app.on('focus', (event) => {
    if(isWindows && needsFocusFix) {
      needsFocusFix = false;
      triggeringProgrammaticBlur = true;
      setTimeout(function () {
        win.blur();
        win.focus();
        setTimeout(function () {
          triggeringProgrammaticBlur = false;
        }, 100);
      }, 100);
    }
  })