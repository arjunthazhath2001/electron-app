const {app,BrowserWindow} = require('electron')

function createWindow(){
    console.log("creating a new window")
    const win= new BrowserWindow({
        width:800,
        height: 600
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