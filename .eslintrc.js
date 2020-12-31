module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],

    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    plugins: [
        'svelte3'
    ],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
            // TODO: This does not work yet, why?!
            rules: {
                "indent": ["error", 4],
            }
        }
    ],
    rules: {
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
    },
    settings: {
    // ...
    }
};
