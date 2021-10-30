const { ipcRenderer } = require('electron')

// ipcRenderer.send('message', 'ping')

// ipcRenderer.on('response', (_, ...args) => {
// 	console.log(...args);
// })s
let count = 0
document.getElementById('count-button').addEventListener('click', _ => {
	count += 1
	document.getElementById('count').innerHTML = count
})