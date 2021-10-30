const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})

	mainWindow.loadFile(path.join(__dirname, 'index.html'))
	// Open the DevTools.
	mainWindow.webContents.openDevTools()
	console.log(__dirname);
}

app.whenReady().then( () => {
	createWindow()
	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})

	ipcMain.on('message', (event, arg) => {
		console.log(arg);
		event.sender.send('response', 'pong')
	})
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
  })