const {app,BrowserWindow} = require('electron')
const path = require('node:path')


function createWindow(){
    console.log("creating a new window")
    const win= new BrowserWindow({
        width:800,
        height: 600,
        webPreferences:{
            preload: path.join(__dirname,'preload.js')
        }
    })

    win.loadFile('index.html')
    console.log("window loaded index.html")

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})