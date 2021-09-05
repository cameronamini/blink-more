console.log('main process working')

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow


app.whenReady().then(()=> {
    const win = new BrowserWindow({ 
        height: 150, 
        width: 200, 
        transparent: true, 
        frame: false, 
        show: false})
    // Tricky way to bring cam bubble to top over fullscreen windows on mac
    win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
    win.setAlwaysOnTop(true, "floating");
    win.setFullScreenable(false);
    // Below statement completes the flow
    win.moveTop();
    win.setOpacity(0.9)
    
    win.once('ready-to-show', () => {
        setInterval(() => win.show(), 5000) // 15s for show
      })
    win.on('show', () => {
    setTimeout(() => win.hide(), 3000) // 3s for hide
    })
    win.loadFile('index.html')
    

})

// function createWindow() {
//     win = new BrowserWindow({
//         height: 600,
//         width: 400
//     })
//     win.loadFile('index.html')
// }

// app.whenReady().then(() => {
//     createWindow()
//   })

// if all windows closed, close application entirely
// taken from electron quick start guide
// app.on('window-all-closed', function () {
// if (process.platform !== 'darwin') app.quit()
// })


