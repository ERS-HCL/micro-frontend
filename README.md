This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

----------------------------------------------------------------------------------------------------
# Microfrontend VOD 

Entry point and container application for a micro frontend demo.

A React VOD application, having a navigation bar, used React Router to select the microfrontend to render onto the main.

# Getting started

1. Clone the repo
2. `yarn install`
3. `cd app-container`
4. `yarn startAll`

This will start the following processes:
movie microfrontend on port 3001
music microfrontend on port 3002
news microfrontend on port 3003
sports microfrontend on port 3004
player microfrontend on port 3005
static content will be served on port 5000
Container application on port 3000

Navigate to http://localhost:3000 to see the micro-frontends running through container application

App container can run independently, but for it to be fully functional you need following to be running:
- the [`content`](https://github.com/ERS-HCL/micro-frontend/tree/master/content) server
- the [`movie`](https://github.com/ERS-HCL/micro-frontend/tree/master/movie/) micro frontend
- the [`music`](https://github.com/ERS-HCL/micro-frontend/tree/master/music/) micro frontend
- the [`news`](https://github.com/ERS-HCL/micro-frontend/tree/master/news/) micro frontend
- the [`sports`](https://github.com/ERS-HCL/micro-frontend/tree/master/sports/) micro frontend
- the [`player`](https://github.com/ERS-HCL/micro-frontend/tree/master/player/) micro frontend
-----------------------------------------------------------------------------------------------------

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
