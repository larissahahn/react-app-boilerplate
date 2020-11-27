# React App with Proxy Server Boilerplate (React, Redux, Express, React Router, Redux Thunk Middleware)

This starter project Create React App with Express proxy server, also using React Redux, React Router, Redux Thunk, Axios, and Styled Components. Download the 'Redux' tab browser extension as it has Redux tab enabled for browser debugging.

## Commands to get started using your React boilerplate

In the project directory, on the command line in your terminal first run: 'npm i' to install project dependencies.

### npm i
### npm run dev

The command 'npm run dev' will use a library called 'concurrency' to simultaneously run two processes:
starting your proxy server on port 3001 and your React app on port 3000.


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Example .env file - Create a .env file in your root directory of your project.
LOG_LEVEL='debug'
MOCK_DATA=true
API_URL=''
NODE_ENV=development


### Helpful Getting Started Tips:

## Create new React components in your src/client/components directory.
## Create new Redux action creators in your src/client/actions directory.
## Create new Redux reducers for your actions in src/client/reducers directory. Make sure you include any additional reducer in your combineReducers in src/client/reducers.js file.
## Create new API endpoints on your proxy server in your routes files located in src/server/api/routes directory as well as include your routes at line 25 in src/server/index.js
## Setup Redux Router links for your app in src/routes.js file. You can configure which component to display per your link there.