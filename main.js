const { app, BrowserWindow } = require('electron')
// const path = require('path')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'), // 필요하지 않으면 제거 가능
      nodeIntegration: true,
    },
  })

  mainWindow.loadFile('./build/index.html') // React의 빌드 결과물을 로드
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
