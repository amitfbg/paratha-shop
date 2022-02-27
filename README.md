### Paratha Shop App with fake api(json-server)

### First run `yarn` or `npm i` to install all the dependencies

## Available Scripts

In the project directory, you can run:

### `yarn dev` or `npm dev`

Runs both the json-server as well as the app.
json-server will run on 3001 and the app will run on 3000.

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You will see error message as the data we are getting from a fake api.
To get data from fake api first we need to run `yarn json-server` or `npm json-server` once it starts
then run `npm start` or `yarn start`

### `yarn json-server` or `npm json-server`

This will only start the json-server on Port 3001.
To start app run `npm start` or `yarn start`

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
