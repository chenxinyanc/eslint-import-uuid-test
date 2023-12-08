module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        "plugin:import/recommended",
        'plugin:import/typescript',
    ],
    overrides: [
        {
            files: ['*.js', '*.ts', '*.d.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 13,
                sourceType: 'module',
                project: [
                    "*/tsconfig.json",
                ],
            },
        }
    ],
    rules: {
    }
};
