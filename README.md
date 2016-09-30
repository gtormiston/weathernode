# WeatherNode

A small, CLI based API aggregator to take weather from the Open Weather Map API and post to a Geckoboard dataset for display on the dashboard.

## Technologies

* Node.js, Express
* Mocha, Chai, Supertest

I chose Node / JS for this project due to the lightweight nature of the program - I didn't need to add routes and felt that it would provide the quickest way to a prototype that I could simply run from the command line.

## Getting setup

1. Download / clone the repo
2. `npm install` to setup your local environment
3. `npm test` to see the tests
4. `npm start` to run the app

## How it works

The app is split into three sections, `app`, `api` and `gb`.

`app` contains the Express runner, as well as containing the routes (just one in this app). When you run `npm start` Express loads up a server at localhost:3000. The function to check the api for data and push to Geckoboard is polled to run every minute.

`api` contains the module to receive data from the Open Weather Map API.

`gb` contains the module to access the dataset (and create if it doesn't exist already), and pushes the datetime and temperature to the dataset.

There's no persistence of data at the moment.

## With a little more time

I would like to work on pushing data to the dataset in a manner that doesn't write over the current data. I'd then create a widget that tracked dataset changes over time as opposed to the simple realtime display that it shows currently. I'd be interested to look into the possibility of displaying specific images on the widgets based on the JSON results, for example 'clouds' or 'sun' if the realtime data contained this information.
