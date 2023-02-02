# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





###`About the project`
The project structure consist of both the tsx files and the scss files
The tsx has three pages, the Login page, Dashboard page and the userdetails page. Each can be found inside the pages folder in the src directory
The pages listed above also make use of compenents which are stored in the components folder of the src directory
The scss files also follow the same format, the scss files can be found in the styles folder in the src directory
Each page has it own scss file and each component also has its own scss file which can be fould under the src/styles/utils folder
The project also has a models.ts file which stores all reusable interfaces. 

The first page shown is the login page. The login button is disabled by default and on becomes enabled when values have been entered for both the username and password

The next page that shows up after clicking login is the dashboard page. This page has the top navigation and also the side navigation. 
In this page the data is fetched from the mock api using axios, it is then displayed in a tabular form for desktops and breaks it down into a single form for smaller devices. 
The dashboard also allows you to choose the number of users to display per page, letting you move through each page via the pagination at the bottom. 
Futhermore this page also allows users filter the users by entering either their name, email, phone number and date created. the status is the only field not working in the filter as it was not provided from the database. 

Upon clicking any three dot icon found at the far right of a user row in the dashboard page, a drop down is shown, when the view details is clicked, the userdetails page is opened. This page shows more information about the user such as their profile details, account balance, guarantor information and social handles. the back button takes you back to the dashboard

The logout button found on the side nav, when clicked takes you back to the login page. 


All pages are mobile responsive for different sizes of screens. 

