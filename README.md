#### The main goal of this is to create a client side web application that reproduces the screenshots below by using [GitHub API](https://developer.github.com/v3/) .

#### GOAL

Go step by step from a VanillaJS app to a modern React client side web application.

Te application uses the [GitHub API](https://developer.github.com/v3/) to fetch the profile data and display the public user repos.

## HOW TO START

1. `npm install`
2. `npm start`


## STEPS

There's different branches on the repo to show de differences between every step on the migration:

1.- Vanilla-JS: Shows the initial state of the app, build only using VanillaJS.

2.- React-set-up: Basic react set up with webpack/babel to work with JSX and a dev server.
    After running `npm install` you can run `npm run dev` to run a dev server.

3.- life-cycle-intro: Has the lifecycle diagrams for react 16.4+. And babel presets to work with react.

4.- Basic-react-migration: Moving the firsts bits of logic to the react ecosystem.

5.- Refactor-app-component: Some refactors applied to the <App />.

6.- Separated-layouts: Domain drive design. Separation of the app in 3 layers: UI, business logic and data.

7.- Hooks: Refactor to use react hooks.
