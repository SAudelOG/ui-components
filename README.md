# UI library

library of ui components to be used within react applications

### Docz
To ease the process of developing the react components the library takes advantage of [docz](https://www.docz.site/), its a relative straight forward tool to build docs base on MDX files, running the docz it's as easy as running an npm command:

```
npm run docz:dev
```

#### Running docz with docker 
for development it's preferred to run the demo page using the npm script mentioned previously since it provides hot reload to speed up the process, the containerized app is useful for deployment purposes.

the Docker file follows the builder pattern to first generate the static files needed for the demo app, and then as a second step configure the nginx server to serve the static files.

Create image.
```
docker builder build -t ui-docz .
```
Run the image mounting the ngnix config file on the container.

```
docker run -d --mount \
    type=bind,src="$(pwd)/nginx-config.json",dst=/docker-entrypoint.d/config.json \
    -p 8080:8000 ui-docz
```

reference on containerizing nginx applications https://unit.nginx.org/howto/docker/#containerizing-apps



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
The library it's built with rollup, and configured via the rollup config factory [file](./rollup.config.factory.js), for the distribution it supports commonjs and ES6 module

```
npx lerna run build
```
