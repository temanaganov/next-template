function config(plop) {
    plop.setGenerator('Page', {
        description: 'Create a Page component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'pages/{{name}}.jsx',
                templateFile: '.plop/page-template.hbs',
            },
        ],
    });
    plop.setGenerator('Component', {
        description: 'Create a React Component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'components/{{kebabCase name}}/{{kebabCase name}}.jsx',
                templateFile: '.plop/component-template.hbs',
            },
            {
                type: 'add',
                path: 'components/{{kebabCase name}}/{{kebabCase name}}.module.scss',
                templateFile: '.plop/component-style-template.hbs',
            },
            {
                type: 'add',
                path: 'components/{{kebabCase name}}/index.js',
                template: "export { default } from './{{kebabCase name}}';\n",
            },
        ],
    });
}

module.exports = config;
