# udacity-final-travel-app

This is the repository for the **Final Project: Build a Travel App** of the Udacity Front End Web Developer Nanodegree Program.

## Goals of this project:
* create asynchronous web app that uses three Web APIs and user input (destination) to dynamically update the UI for the App
* use Webpack as build tool for Production and Development Environment
* Provide location data for a given user input and by that location data search for suitable pictures and give a weather forecast for the following 16 days
* Style the webpage according to the user screen width (responsive design)
* Use Jest Framework for Unit Testing
* Use Service Workers to support offline functionality
* Provide additional customizations (see **Additions** section)

## Functionalities used:
* Node.js for Webserver with Express
* Axios for promise based requests usage together with Node.js
* Build tool Webpack for Production and Development Environment (additional Webpack dev server with proxy)
* Jest Framework for Unit Testing
* Service Workers for offline functionality
* Geonames API to receive location data for given input
* Weatherbit API to receive 16 days weather forecast for location data from Geonames
* Pixabay API to receive picture for the given destination
* Styles with SCSS (responsive design)
* Babel to make recent JS Code backwards compatible
* Proxy server during development mode to test request functionality

## Additions:
The following customizations are implemented from the list of bonus items:
* Allow the user to remove the trip
* Use Local Storage to save the data so that when they close, then revisit the page, their information is still there
* Instead of just pulling a single day forecast, pull the forecast for multiple days
* Incorporate icons into forecast

## Steps to start
* download repository
* check Node.js installation in Terminal with `node --version` and install if not present
* install dependencies via npm (included with Node.js) with `npm install`
* run Jest test suites via `npm run test`
* run development environment via `npm run dev` with dev server running on `localhost:8080`
* **Remark for dev mode**: to test API calls during development mode a proxy was configured via Webpack so the command `npm run express` needs to be run in a separate terminal in the project root directory to start the express server on port 8081
* run production environment via `npm run start` which starts express server on `localhost:8081`
* production build can be run separately via `npm run build-prod`

### Notes
* the name of the app **Treather** is a combination of the basic setup to provide *weather* forecast for a certain *travel*
* since the release of Express 4.16+ the features `.urlencoded()` and `.json()` were included directly into Express, so additional installation of `body-parser` is not needed anymore
* using webpack-cli 4.x requires beta version `webpack-dev-server@4.0.0-beta.0` to make the webpack dev server work again
* as this project uses Webpack 5 the required `optimize-css-assets-webpack-plugin` was not supported anymore, changed to `css-minimizer-webpack-plugin`
* the page and input fields (especially the `date`) is not optimized for Safari Browser and needs future support for this case
* during first server start the Weatherbit API did not respond in some cases, problem is yet unclear and regular functionality is provided after the first two - three requests

---

### Social
* [GitHub](https://github.com/MartinSchuhmacher)
* [LinkedIn](https://www.linkedin.com/in/martinschuhmacher/)