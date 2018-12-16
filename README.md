# indecision_app

#### Install live server:
* yarn global add live-server

#### Other steps
* Add following scripts inside body tag in index.html

	* `<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>`
	* `<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>`

#### install Babel 
	* yarn global add babel-cli@6.24.1
	* babel -help

### Init the yarn:
    * yarn init

### Install presets

    * yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

### Convert JSX code into the js with help of Babel:

    * babel src/app.js -o public/scripts/app.js --presets=env,react

    * babel src/app.js -o public/scripts/app.js --presets=env,react --watch
	   
	* live-server public.   ==== in another tab

      
##### If I remove the node_modules: 
    * remove node_modules to regenerate `run yarn install`
    
    

##### Remove Global libraries
    * yarn global remove babel-cli live-server
    
##### Install webpacker
    * yarn add webpack@4.27.1
    * yarn add webpack-cli@3.1.2
    
##### Install #3rd party library
    * yarn add validator@8.0.0
    
#### Install react and react-dom
    * yarn add react@16.6.3 react-dom@16.6.3
    
#### New package to run babel automatically
    yarn add babel-core@6.25.0 babel-loader@7.1.1
    
#### Install webpack dev server
    yarn add webpack-dev-server@3.1.10 
    
#### Add transform class properties
    yarn add babel-plugin-transform-class-properties@6.24.1              
    
    