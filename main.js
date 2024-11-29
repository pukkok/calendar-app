import { app, BrowserWindow } from 'electron'

// 재사용 가능한 기능을 작성하여 창을 인스턴스화하기
const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600
	})

	win.loadFile('index.html')
}

// 앱이 준비되면 기능 호출
app.whenReady().then(() => {
	createWindow()
})

// 모든 창이 닫히면 앱 종료(Windows 및 Linux)
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})