console.log(__dirname);

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.base.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['**/*'],
  plugins: ['@typescript-eslint', '@nrwl/nx'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@nrwl/nx/enforce-module-boundaries': [
      'error',
      {
        enforceBuildableLibDependency: true,
        allow: [],
        depConstraints: [{ sourceTag: '*', onlyDependOnLibsWithTags: ['*'] }],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nrwl/nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*'],
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nrwl/nx/typescript'],
      parserOptions: {
        project: './**/tsconfig.?*.json',
        tsconfigRootDir: __dirname,
      },
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nrwl/nx/javascript'],
      parserOptions: {
        project: './**/tsconfig.?*.json',
        tsconfigRootDir: __dirname,
      },
      rules: {},
    },
  ],
};
