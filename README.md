## STEP 1:

```
npx create-next-app [app_name]
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## STEP 2:

```
npm i -D eslint-config-standard eslint-plugin-tailwindcss eslint-config-prettier prettier
```

```
updated .eslintrc.json

{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  "rules": {
    "no-undef": "off"
  }
}
```

```
added .prettierrc file in root

{
  "arrowParens": "always",
  "printWidth": 80,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

```
added .vscode folder having settings.json

{
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "json",
    "typescript",
    "typescriptreact"
  ],
  "cSpell.words": ["Parens"]
}

```
