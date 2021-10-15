const electron = require('electron');
const ipcRenderer = electron.ipcRenderer // renderer for renderer module

document.getElementById('start').addEventListener('click', _ => {
	ipcRenderer.send('countdown-start'); // send an event that a listener can capture
});

ipcRenderer.on('countdown', (event, count) => {
	document.getElementById('count').innerHTML = count;
});