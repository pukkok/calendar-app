const { app, BrowserWindow } = require('electron')

// 재사용 가능한 기능을 작성하여 창을 인스턴스화하기
const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600
	})

	win.loadURL('http://localhost:3000')
}

// 앱이 준비되면 기능 호출
app.whenReady().then(() => {
	createWindow()

	// macOS 앱은 일반적으로 창이 열리지 않더라도 계속 실행됨 => 문제 해결
	app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 모든 창이 닫히면 앱 종료(Windows 및 Linux)
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})