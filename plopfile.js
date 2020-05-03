// TODO: create CLI that allows the creation of a new component easily

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