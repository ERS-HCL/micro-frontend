----------------------------------------------------------------------------------------------------
# Microfrontend VOD 

Entry point and container application for a micro frontend demo.

A React VOD application, having a navigation bar, used React Router to select the microfrontend to render onto the main.

# Description
* Micro frontends built with different tech stacks (React and Angular)
* Each micro frontend is wrapped in Web Components
* Integration happen through React Wrapper app
* Micro frontends are imported using HTML imports
* The main application is automatically rendered when the main script loads

# Running Project

1. Clone the repo
2. `yarn install`
3. `cd container`
4. `yarn startAll`

This will start the following processes:
- static content will be served on port 5001
- container application on port 4300

Navigate to http://localhost:4300 to see the micro-frontends running through container application


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
