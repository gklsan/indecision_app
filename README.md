# indecision_app

## Install live server:
* yarn global add live-server

* Add following scripts inside body tag in index.html

	* `<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>`
	* `<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>`

* install Babel 
	*  yarn global add babel-cli@6.24.1
		* babel -help

* yarn init

* yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

* babel src/app.js -o public/scripts/app.js --presets=env,react

* babel src/app.js -o public/scripts/app.js --presets=env,react --watch
	* live-server public.   ==== in another tab

* remove node_modules to regenerate `run yarn install`

