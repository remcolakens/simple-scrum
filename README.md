# Remco's Next.js Boilerplate

> Easy to use front-end boilerplate to start developing your Next.js application right away 💯

[**Learn More**](#learn-more)

---

## Highlights

- Features all the benefits of Next.js 12
- Uses Emotion for CSS-in-JS
- Typescript
- Lint your code with `husky` & `lint-staged`
- Normalizes default browser styles
- Automatically formats your code by using `Prettier`
- JavaScript Testing Framework
- Friendly errors & warnings
- Includes Chakra UI to quickly build user-friendly interfaces
- Automatically optimizes all your SVGs

## File Tree

```bash
├── __tests__             # Test folder
│   └── utils             # Utils folder for tests
│       └── index.tsx     # Main file for the test utils
│   └── index.test.tsx    # Sample test file
├── components            # Component folder
│   └── atoms             # Atoms (e.g. <a>, <h1>)
│   └── molecules         # Molecules  (e.g. wrappers, combined atoms)
│   └── organisms         # Organisms (e.g. carousels, content blocks)
├── docs                  # Documentation
├── pages                 # Pages folder
│   ├── _app.tsx          # Main page file
│   ├── _document.tsx     # Custom document
│   └── index.tsx         # Sample index page
├── public                # Folder for static assets
│   └── favicon           # Favicon - https://realfavicongenerator.net/
├── styles                # Style folder
│   └── components        # Styles for the custom components
│       └── buttonStyles  # Example file for custom button styles
│   └── themes.ts         # Themes
├── svgs                  # SVG folder
│   └── cat.svg           # Example svg
├── types                 # Types folder
│   └── index.d.ts        # Your default project Typescript declaration file
├── .babelrc              # Babel config
├── .editorconfig         # Config to normalize editors
├── .env.example          # Example file with required .env variables
├── .eslintrc.json        # Eslint config
├── .gitignore            # Files that will be ignored by git
├── .lintstagedrc.js      # Config file for "lint-staged" (package)
├── .nvmrc                # Compatible node version
├── .prettierignore       # Files that will be ignored by Prettier (package)
├── .priettierc           # Prettier config (package)
├── .release-it.json      # Release it config (package)
├──  jest.config.js       # Config file for jest
├──  jest.setup.js        # Used for __tests__/testing-library.js
├──  next-env.d.ts        # Next.js Typescript declaration file (leave unchanged)
├──  package.json         # The package.json of this project
├──  README.md            # The manual of this project
├──  tsconfig.json        # Typescript config
└──  yarn.lock            # Lock file for packages (leave unchanged)
```

## Usage

```bash
# Install dependencies

yarn install

# Start local webserver at port 3000

yarn dev

# Run linters

yarn lint

# Run unit tests

yarn test

# Build app for production (gets output in the 'dist' directory)

yarn build
```

## Learn More

To learn more about Next.js and the other tools, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Typescript](https://www.typescriptlang.org/docs) - Introduction to TypeScript
- [Emotion](https://emotion.sh/docs) - Use the best bits of ES6 and CSS to style your apps without stress
- [Eslint](https://eslint.org/docs/user-guide) - Find and fix problems in your JavaScript code.
- [Prettier](https://prettier.io/docs/en/index.html) - Prettier is an opinionated code formatter.
- [Jest](https://jestjs.io/docs/getting-started) - Jest is a delightful JavaScript Testing Framework with a focus on
  simplicity.
- [React Testing Library](https://testing-library.com/docs/) - Simple and complete testing utilities that encourage good
  testing practices

## Deploy

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/remcolakens/next-boilerplate)

## Todo

- [x] Write README.md
- [x] Add UI Library e.g. Chakra UI
- [x] Add React Testing Library
- [ ] Add more examples

## License

MIT
