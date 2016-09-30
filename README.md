# WeatherNode

A small, CLI based API aggregator to take weather from the Open Weather Map API and post to a Geckoboard dataset for display on the dashboard.

## Technologies

* Node.js, Express
* Mocha, Chai, Supertest

## Getting setup

1. Download / clone the repo
2. `npm install` to setup your local environment
3. `npm test` to see the tests
4. `npm start` to run the app

## How it works

The app is split into three sections, `app`, `api` and `gb`.

`app` contains the Express runner, as well as containing the routes (just one in this app). When you run `npm start` Express loads up a server at localhost:3000.

`api` contains the module to receive data from the
