# gEnt

The Galvanize Enterprise Desktop Application.

___

This project was generated using [Nx](https://nx.dev).  See the docs for creating additional applications, supporting libraries, etc.

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

The electron portion of the workspace was generated using [nx-electron](https://www.npmjs.com/package/nx-electron), which is neither an official Nx plugin nor a community supported one.  Apologies on the fairly unclear configuration of things within that arena.

## Getting Started

This workspace has two main apps: an [Electron application](./apps/g-ent-desktop/src/main.ts) and a [React web-app](./apps/g-ent/src/app/app.tsx).  Unless you need to be working within the Node side of Electron, most development should be happening in the React application or supporting libs.

### Running the App

`npm start` will simultaneously run the Electron app and Web app in parallel.  To run either individually, use the command `npm run serve:*` where star is either "web" or "electron".

### Nx Quick Reference

#### Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

When using Nx, you can create multiple applications and libraries in the same workspace.

#### Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

Libraries are sharable across libraries and applications. They can be imported from `@galvanize/*` where "*" is the name of the library.

#### Development server

Run `nx serve my-app` for a dev server. Navigate to [http://localhost:4200/]. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

#### Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

#### Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

#### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.
