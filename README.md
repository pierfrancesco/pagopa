# Pago Pa Challenge
## by Pierfrancesco

Hello folks, this is the app for address these requirements:

`
(1) We have a simple API that returns a JSON array (*). We would like you to use HTML, CSS and Javascript to read the API and display it in an organized way. In addition, you should add in some sort of sorting mechanic to the front-end. Feel free to use any frameworks you would like to achieve the task. (provide a link to your solution)
`

## The solution

The app has been developed with React, in particular with the following tools:

- `Create React App` (for fast spin up of react projects)
- `Storybook` (for component creation in an isolated environment + documented them)
- `Generate React CLI` (for generate components similar to what ng cli does, plus you get *.stories.js file for free)
- `stylelint` & `eslint` for review code from broken basic rules.

The project is liked to a codesandbox space at this link: PLACE_HERE_THE_CODE

## Resources

In order to have a familiar taste in terms of UIs some elements have been inspired by these
useful resources: https://github.com/italia/design-ui-kit.

## Project Structure

The entry point for this project is the `src/index.js` file which mounts the `src/App.js`

- `.storybook`: folder with storybook configurations
- `public`: folder for dist generation
- `src`: folder with the main files and the entry point
  - `assets`: static files
  - `components`: react components
  - `stories`: stories to be rendered inside storybook
  
## Make it run!

1. `npm run start`: init the project at port `localhost:3000`
2. `npm run storybook`: init the storybook catalog under `localhost:6006`
3. `npx generate-react-cli component MyComponent`: generate a component with its files (js, scss, test & story)
4. `npm run lint:css`: run css linter against the scss files
5. `npm run lint:js`: run js linter against the scss files

## Improvements

A lot of things can be improver, I'm mentioning some of them but the list is long. 
Because it's a chalenge I've skipped them but doesn't mean that they are not important.

1. Responsivness
2. Redux as a state manager
3. Accessibility Test
4. Snapshot Test
5. Visual Regression Test
6. Lazy loading for components that are below the fold
7. Caching & so on.

