# Nuxt Monorepo Starter

## Credits

This is a project based on [Serko.dev's Nuxt Monorepo](https://github.com/serkodev/nuxt-workspace)

Welcome to read this [blog post](https://serko.dev/post/nuxt-3-monorepo) to learn about the details of the architecture.

## Overview

The repository is designed to be a starting point for building complex frontend applications, and it includes a number of features that make it well-suited for large-scale development. Some of the key architectural decisions that were made when designing this monorepo include the use of Nuxt Layers to organize the application code, the use of a consistent naming convention throughout the repository, and the inclusion of a number of pre-configured scripts and tools to simplify the development process.

## Developer eXperience

Good DX is very important for productivity and the vibe of people working with the software.

This repository preconfigures VSCode based IDEs to provide a consistent DX for developers and ensure a consistent code quality accross projects.

## Packages

The monorepo consists of the following packages:

- `api`: This package provides a RESTful API for the application.
- `app`: This package contains the main application code, including the Nuxt configuration and Vue components.
- `lint`: This package contains scripts for linting and formatting the code.
- `ui`: This package contains reusable UI components that can be used throughout the application.

## Dependencies

The following dependencies are used in this project:

- `nuxt`: Used as the main framework for building the application.
- `vue`: Used as the frontend framework for building the user interface.
- `typescript`: Used as the programming language for building the application.
- `eslint`: Used for linting and formatting the code.
- `pnpm`: Used as the package manager for managing dependencies.
- `dotenv`: Used for managing environment variables.

## Getting Started

To get started with the project, run the following command:

```bash
pnpm install
```

## Development

To run the application in development mode, use the following command:

```bash
# all
pnpm dev

# single
pnpm packagename dev
```

## Building

To build the application, use the following command:

```bash
pnpm build
```

## Linting

To run ESLint on the entire project, use the following command:

```bash
pnpm lint
```

To automatically fix any fixable errors, use the following command:

```bash
pnpm lint:fix
```
