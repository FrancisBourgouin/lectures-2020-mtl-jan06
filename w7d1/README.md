# Component-Based UI w/ React

## Topics

- New React Project
- ES6 Review

  - Object/Array Destructuring
  - Spread operator
  - Property shorthand

- Review React concepts

- Basic React Patterns

  - Passing Props
  - Looping Pattern
  - Passing children with JSX
  - Handling DOM events
  - Managing state
  - Controlled inputs
  - Conditional rendering
  - Fragments

- Demo:
  - Build components in isolation with Storybook
  - Using components in the application

## New React Project: Scheduler

- demo of the Scheduler project

### ES6 Review

- Object/Array Destructuring
- Spread operator
- Property shorthand

- [ES6 Exercises](./es6_review.js)

### Opinions of ReactJS

- Declarative
- Composition
- Unidrectional Dataflow
- Explicit Mutations
- JavaScript-First Paradigm

#### Composition / Components

- Components are the building blocks of react
- Take a functionality of a small piece of your application and encapsulated its own isolated container
- A component encapsulate or hide the underlying complexity of what's going on(state, events, etc)
- You build a large app out of multiple smaller apps

- Anatomy of a React Component
  - a function that
    - receives an object of properties as an input parameter
    - returns a React element

> **What are props?**
> Props are properties that can be passed to components much like parameters are passed to functions.

### JSX

- Each JSX element is syntactic sugar for calling the following

  `React.createElement(component, props, ...children)`

- Babel is transpiling JSX code into JavaScript code

**Some rules about JSX**

- Every tag must be closing even none closing tags in HTML such as \<img\> and \<input\>...\<img src=""\> becomes \<img src="" /\>
- Components must return one root tag. If you have multiple elements, you must wrap them in a span, div, or React.Fragment
- JavaScript expressions need to be wrapped inside {}
- Regular HTML comments do not work in JSX. To insert comments in JSX you must use this syntax: {/\* Insert Comment Here \*/}
- class becomes _className_

#### Declarative

- You focus on the output of the task
- There is a level of abstraction about how it's done

#### Unidirectional Data Flow

- state > UI (confusing...)

- React uses a unidirectional data flow

  - Data flow is one way
  - Data goes from parent element down to children elements (props)

#### Explicit Mutations

- The state is changing whenever we call `setSomething` function from `useState` hook.
- `setSometing` triggers a re-render of the View.

#### JavaScript-First Paradigm

- We're still using JavaScript
- We're not using Domain Specific Language (DML)

## Storybook

- Open source tool to build UI components in isolation

  - You don't have to set up an application to start creating components
  - No distraction from the UI and any of the app dependencies
  - You can experiment, easier to test edge cases
  - Can be shared accross teams
  - Can be used as a style guide

### Installing Storybook

#### Install React

`npx create-react-app tweeter-react`

`cd tweeter_react`

#### Install Story Book

`npx -p @storybook/cli sb init`

#### Storybook Folder Structure

- Storybooks adds 2 folders to your project

```shell
.storybook/
  - addons.js
  - config.js
...

src/
  stories/
    - index.js

```

### Running the App

- Storybook adds scripts to package.json and dev dependencies

```json
...
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "storybook": "start-storybook -p 9009 -s public",
    "build-storybook": "build-storybook -s public"
  },
...
```

```json
...
  "devDependencies": {
    "@storybook/addon-actions": "^5.1.10",
    "@storybook/addon-links": "^5.1.10",
    "@storybook/addons": "^5.1.10",
    "@storybook/react": "^5.1.10"
  }
...
```

- We run the 3 following instances in 3 terminal windows:
  **You can either use `yarn` or `npm`**

  1. `npm start` (starting the app) or `yarn start`
  2. `npm run storybook` or `yarn run storybook`
  3. `npm run test` (automated tests with Jest) or `yarn test`

### Storybook UI

**Go over Storybook interface with default stories**

### Creating Stories

- Each component can have multiple stories
- A story contains a single state of the component by passing different **props**
- Provides a visual test case

* `storiesOf()` Stories for your component with one or more `add()`
* `action()` Actions allows you to log user interactions in the Storybook UI

```js
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('myComponent', module)
  .add('myComponentStory', () => {})
  .add('myComponentOtherStory', () => {})
  ...
```

#### Configuring React Sass

- Install node-sass

`npm i node-sass --save`

- Rename all css file extension to `scss`

#### Configuring Font Awesome

- Refer to the instructions here

- [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)

## Using Components

- Once the stories are done we are now ready to put our components in place in `<App />`

- We need to do a few things

  - Use the `useState` React hook to maintain our data such as tweets
  - Create a controlled input for `NewTweet`
  - Use counter state to track the changes to counter
  - Error Validation
