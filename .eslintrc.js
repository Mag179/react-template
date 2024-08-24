/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  root: true,
  globals: {
    module: "readonly",
    process: "readonly",
    React: "readonly",
    JSX: "readonly",
  },
  //   ignorePatterns: ["jest.config.ts"],
  extends: [
    "plugin:react/recommended",
    "plugin:jsdoc/recommended-typescript",
    "airbnb",
    "airbnb/hooks",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
    "jsdoc",
    "react",
    "react-hooks",
    "import",
    "jsx-a11y",
    "unused-imports",
  ],
  rules: {
    // import rules
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          // ここに書いた順序で間に1行空行をあけつつ整頓される
          { pattern: "@/**", group: "internal", position: "before" },
          { pattern: "../**", group: "internal", position: "before" },
          { pattern: "./**", group: "internal", position: "before" },
        ],
      },
    ],
    "react/function-component-definition": [
      "warn",
      { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
    ],
    "import/no-unresolved": [2, { ignore: ["^@/"] }],
    "import/extensions": "off",

    // 命名規則。最初の段階ではいったん外す。
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "variable",
        format: ["strictCamelCase", "snake_case", "StrictPascalCase"],
      },
      {
        selector: "variable",
        types: ["function"],
        format: ["strictCamelCase", "StrictPascalCase"],
      },
      {
        selector: "function",
        format: ["strictCamelCase"],
      },
      {
        selector: "class",
        format: ["StrictPascalCase"],
      },
      {
        selector: "parameter",
        format: ["strictCamelCase", "snake_case"],
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-pascal-case": "warn",

    // コメント
    "jsdoc/require-returns": ["off", { contexts: ["any"], forceReturnsWithAsync: true }],
    "jsdoc/require-jsdoc": [
      "error",
      {
        publicOnly: true,
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
        contexts: [
          "VariableDeclaration",
          "TSInterfaceDeclaration",
          "TSTypeAliasDeclaration",
          "TSPropertySignature",
          "TSMethodSignature",
        ],
      },
    ],
    "jsdoc/require-description": [
      "error",
      {
        contexts: [
          "ArrowFunctionExpression",
          "ClassDeclaration",
          "ClassExpression",
          "FunctionDeclaration",
          "FunctionExpression",
          "MethodDefinition",
          "PropertyDefinition",
          "VariableDeclaration",
          "TSInterfaceDeclaration",
          "TSTypeAliasDeclaration",
          "TSPropertySignature",
          "TSMethodSignature",
        ],
      },
    ],
    "jsdoc/check-tag-names": [
      "error",
      {
        definedTags: ["typeParam", "remarks"],
      },
    ],
    "jsdoc/require-param": [
      "error",
      {
        checkDestructuredRoots: false,
      },
    ],

    // Off rules
    "no-console": "off",

    "jsdoc/require-returns": ["off", { contexts: ["any"], forceReturnsWithAsync: true }],
    "jsdoc/lines-before-block": "off",

    "react-hooks/exhaustive-deps": "off",
    "react/require-default-props": "off",

    // Error
    "no-eq-null": "error",
    "no-duplicate-imports": "error",

    "default-case": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // It will default to "latest" and warn if missing, and to "detect" in the future
      flowVersion: "0.53", // Flow version
    },
  },
};
