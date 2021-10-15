1. npm init -y
1. npm install electron -- save - installs electron
1. package.json - set main to whatever.js - this is your entry point for the app
1. Add npm script to run app - package.json - scripts - start 'electron .' - dot is current directory


add HTML file and include CSS like you normally would

add JS via script in HTML - load with require('./path')


ipc - pubsub for the renderer process to communicate to main and vice/versa

folder structure
root
- src