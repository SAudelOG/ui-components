# UI library

library of ui components to be used within react applications

### Docz
To ease the process of developing the react components the library takes advantage of [docz](https://www.docz.site/), its a relative straight forward tool to build docs base on MDX files, running the docz it's as easy as running an npm command:

```
npm run docz:dev
```

### Creating a new component
The library delegates the tedious process of creating a new component in a its own package to [plop](https://plopjs.com/) it will handle the boilerplate and scaffolding via CLI, currently the method supported is:

```
npm run generate <componentName>
```

it will create a new folder under the packages folder with all the nesserary to start building the functionality of the component


### Testing
The components are using jest + react testing library, it is encouraged to test the components as close as possible to final user interaction, trying to remove as much as possible all the hidden layer between users and implementations helps to find and resolve easies with ease:

```
npm test
```

### Distribution
The library is built with rollup, and it's configured via the rollup config factory [file](./rollup.config.factory.js), for the distribution it's support commonjs and ES6 modules

```
npx lerna run build
```
