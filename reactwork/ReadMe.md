
Common commands used with npm (Node Package Manager) in the context of React develop- ment:
1. npm init
2. npm install react: Installs the React library.or npm i react
3. npm install react-dom: Installs the React-DOM library, which is used for rendering React components in the DOM.

Package.json
Package.json serves as the blueprint for our project.
It includes important information about your project, such as its name, version, and dependencies.

Dependencies (inside package.json)
Dependencies in package.json indicate that your code execution and functionality depend on specific libraries or packages.

Node modules are directories containing all the modules and dependencies required for your project.

you also need bundler for your project
why?
– Enabling live reloading, so any changes you make are immediately reflected in your applica- tion.
– Handling tasks such as image optimization to optimize the performance of your app.
– Running your code during development.
– Minifying your code for production to improve performance.

example of bundlers are: parcel, webpack
here we have installed parcel bundler
1. npm i parcel

now to execute we use npx command
1. NPM (Node Package Manager) is used for installing packages and managing project dependen- cies.
2. NPX is a package runner tool that comes with npm. It is used for executing packages or commands.

command will be for this project:
1. npx parcel index.html

and server will be running at http://localhost:1234 (by default).

