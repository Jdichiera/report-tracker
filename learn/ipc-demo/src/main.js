const { ipcMain } = require('electron');
const electron = require('electron'); // import electron
const countdown = require('./countdown');
const ipcMain = electron.ipcMain; // main for main module

const app = electron.app // native app from electron
const BrowserWindow = electron.BrowserWindow

const windows = [];

app.on('ready', _ => {
	[1, 2, 3].forEach( _ => {
		let window = new BrowserWindow({
			height: 500,
			width: 400,
			webPreferences: {
				nodeIntegration: true,
				contextIsolation: false
			}
		});
	
		window.loadURL(`file://${__dirname}/countdown.html`)
	
		window.on('closed', _ => {
			window = null; // If the window is closed, make this null so it can be garbage collected
			console.log('Closed!');
		});
	
		windows.push(window);
	})
});

// Listen for the countdown-start signal and then send an anon function
// to the imported countdown method
// use the event that is sent to reply to the sender
// Cant use IPC.send because we are using ipcMain
ipcMain.on('countdown-start', (event, arg) => {
	countdown(count => {
		console.log(count);
		windows.forEach(window => {
			// ipc.send('countdown', count); cant do this
			// event.sender.send('countdown', count); // doing this will make all the windows individual
			window.webContents.send('countdown', count); // doing this will make all the windows synchronized
		});
	});
});