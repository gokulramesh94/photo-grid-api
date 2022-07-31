<h1 align="center">PHOTO GRID</h1>
<h2 align="center">API</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
    </li>
    <li>
      <a href="#prerequisites">Prerequisites</a>
   </li>
   <li>
      <a href="#dependency-modules">Dependency Modules</a>
   </li>
   <li>
      <a href="#installation">Installation</a>
   </li>
  </ol>
</details>

## About the project

Photo Grid API is a repository containing the APIs of Photo Grid. The client repository can be found [here](https://github.com/gokulramesh94/React-coding-challange)

## Prerequisites

The application's backend is built using [NodeJS](https://nodejs.org/en/). It uses npm package manager to get its dependencies.

The application uses [Mongo](https://www.mongodb.com/) as it's Database.

To have this project running on you local machine, you need to install the following:

1. [NodeJS](https://nodejs.org/en/)
2. [NPM](https://docs.npmjs.com/)
3. [Mongo DB](https://www.mongodb.com/)

## Dependency Modules

The following dependencies were used in the application
| Name | Description |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [express](https://www.npmjs.com/package/express) | Fast, unopinionated, minimalist web framework for node. |
| [mongoose](https://www.npmjs.com/package/mongoose) | Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks. |
| [cors](https://www.npmjs.com/package/cors) | CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. |
| [axios](https://www.npmjs.com/package/axios) | A Promise based HTTP client for the browser and node.js. |
| [dotenv](https://www.npmjs.com/package/dotenv) | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. |

## Dev Dependency Modules

The following development dependencies were used in the application
| Name | Description |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [nodemon](https://www.npmjs.com/package/nodemon) | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. |
| [typescript](https://www.npmjs.com/package/typescript) | TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. |
| [ts-node](https://www.npmjs.com/package/ts-node) | TypeScript execution and REPL for node.js, with source map and native ESM support. |

## Installation

To have this application running on you local machine, you need to install the <a href="#prerequisites">prerequisites</a> first.

Once you have everything installed, you need to do the following,

1. Clone/Extract the repository to a desired location on the server.

2. Install dependencies.
   ```sh
   # cd <project directory path>
   npm install
   ```
3. Request the .env from the developer or create your own with your mongo cluster credentials.
4. Run Development Server

   ```sh
   npm run dev
   ```

5. Run Production Server

   ```sh
   npm run start:server
   ```
