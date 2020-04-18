// TODO: stablish a pattern to generate components

module.exports = function (plop) {
    // component generator
    plop.setGenerator('component', {
        description: 'ui component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name'
        }],
        actions: [{
            type: 'add',
            path: 'src/{{name}}.js',
            templateFile: 'generators/component/index.hbs'
        }]
    });
};