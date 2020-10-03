# Anime web application

React client that connects to Anilist, a public GraphQL API that provides data on Anime series.

The API reference documentation can be found [here](https://anilist.github.io/ApiV2-GraphQL-Docs/) and in case you want to play around with the API, you can do so with the [interactive GraphiQL editor](https://anilist.co/graphiql).

For more general information regarding the AniList API, go [here](https://anilist.gitbook.io/anilist-apiv2-docs/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to set up a quick development environment.

**Table of Contents**

- [Anime web application](#anime-web-application)
	- [Key features](#key-features)
	- [Application architecture](#application-architecture)
	- [Tech stack](#tech-stack)
	- [Application improvements](#application-improvements)
	- [Available Scripts](#available-scripts)
		- [`npm install`](#npm-install)
		- [`npm start`](#npm-start)
		- [`npm test`](#npm-test)
		- [`npm run build`](#npm-run-build)
		- [`npm run eject`](#npm-run-eject)


<a name="key-features"/>

## Key features

- Search for Anime series (debounced search)
- Grid list with cover and name of anime series (cards)
- Infinite scrolling (renders placeholder cards when loading data)
- Lazy loading images using Intersection Observer API
- Edit and save user profile + form validation before submitting (no business logic, shows an error toast when submitting)
- Delete user profile (no business logic, shows an error toast when performing action)
- Anime details are shown in a modal when clicking on a card

<a name="architecture"/>

## Application architecture

- Using container and presentational components pattern to separate business logic form UI logic. This makes testing presentational components much easier
- My App's architecture is inspired by the [atomic design methodology](https://danilowoz.com/blog/atomic-design-with-react), it consists of the following major folders:
  - build: contains optimized build for production
  - src: source code
    - shared: reusable UI components, constants and utils that are used all over the app
    - pages: all components that represent a React route and are composed using multiple containers
      - components (UI logic)
      - containers (business logic)
      - {pageName}Page.tsx
		- layout: components specifically used for building a layout

<a name="tech-stack"/>

## Tech stack

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Statically typed JavaScript
- [Material-UI](https://material-ui.com/) - React UI framework
- [Apollo Client](https://www.apollographql.com/docs/react/) - Data management solution for interacting with a GraphQL API (queries, mutations, subscriptions, ...)
- [React Hook Form](https://react-hook-form.com/) - Form logic and validation, embraces uncontrolled components through usage of ref
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) - App routing
- [Styled Components](https://styled-components.com/) - CSS in JavaScript
- [NotiStack](https://iamhosseindhv.com/notistack) - Highly customizable notification toasts
- [Jest](https://jestjs.io/) - JavaScript testing framework
- [Enzyme](https://enzymejs.github.io/enzyme/) - JavaScript testing utility
- [Fontawesome](https://github.com/FortAwesome/react-fontawesome) - Icons
- [UseDebounce](https://usehooks.com/useDebounce/) - Hook for debouncing any fast changing values

<a name="improvements"/>

## Application improvements

- Write tests
- Implement a loading state for buttons
- Confirmation modal when deleting user account
- Add default actions buttons to modal component
- Use ref forwarding for anime cards ✅
- Use cached image when showing modal with Anime details
- Use storybook to organize, document and build components in isolation
- Theme app with Material UI's and styled components' theme provider
- Improve accessibility
- Change placeholder for lazy image (now dark grey)
- Fix height image when viewing Anime details, because now some images are not taking full height of modal container
- Create singleton for Intersection Observer class in the lazy image component as now IO is instantiated for every image
- Look on how to organize styled components better as some are now organized in a dedicated file (component-name.styles.tsx), while others are just included with the component
- Create reusable form buttons component (can be used as base for other forms)
- Make GraphQL API URL configurable as it's now hardcoded (environment vars or config file)
- Lots more...

<a name="scripts"/>

## Available Scripts

In the project directory, you can run:

### `npm install`

Will install all app dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
