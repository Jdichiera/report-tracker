1. npm init -y
	Makes a package.json file
1. npm install electron -- save
	installs electron for your app and adds the dependency to your node package.json
1. Add /src/main.js file
	This is where your electron app will start and what is run with npm start
1. In the package file, set the main file
	package.json - set 'main': 'myfile.js'
	this is your entry point for the electron app
1. Add npm script to run app
	In your package.json add a new script
	"start": "electron ."
	This will start your electron app, running whatever file is listed as the main.
	The dot is current directory
1. Make a window in the main.js file and load the index
1. Make an index.html file and require the renderer.js file in a script tag
	<html>
		<head></head>
		<body>
			<h1>Works</h1>
			<script>require('./renderer')</script>
		</body>
	</html>

cycle:
	node : npm start
	electron : main makes window and loads index
	index : index requires renderer.js which is loaded and executed and displayed in the index



add HTML file and include CSS like you normally would

add JS via script in HTML - load with require('./path')


ipc - pubsub for the renderer process to communicate to main and vice/versa

folder structure
-root-
--node_modules
--src
---main.js
---index.html
-package.json