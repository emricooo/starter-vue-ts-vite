# Starter project Vue + TypeScript + Vite + Tailwind + Tanstack + Zod

A modern Vue 3 application built with Vite, featuring internationalization, state management, and a comprehensive development toolchain.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Features

- ⚡ **Vue 3** - Composition API, `<script setup>`
- 🛠️ **Vite** - Fast build tool and development server
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌍 **Vue I18n** - Internationalization support (EN/FR)
- 🗂️ **Pinia** - State management with persistence
- 🔍 **TanStack Query** - Data fetching and caching
- 📊 **TanStack Table** - Powerful data tables
- 🧰 **VueUse** - Collection of essential Vue composition utilities
- 📝 **TypeScript** - Type safety
- 🛡️ **Zod** - Runtime type validation
- 🎯 **ESLint + Prettier + Stylelint** - Code quality tools
- 🚀 **OXLint** - Fast linting

## Tech Stack

### Core
- **Vue 3.5** - Progressive JavaScript framework
- **TypeScript** - Static type checking
- **Vite 7** - Build tool and dev server

### Styling
- **Tailwind CSS 4** - Utility-first CSS
- **SCSS** - CSS preprocessor

### State & Data
- **Pinia** - Vue state management
- **TanStack Vue Query** - Server state management
- **Vue I18n** - Internationalization
- **Zod** - Runtime type validation and schema validation

### Development Tools
- **ESLint** - JavaScript linting
- **Prettier** - Code formatting
- **Stylelint** - CSS linting
- **OXLint** - Fast linting alternative

## Internationalization

The project supports multiple languages with Vue I18n:

```
src/i18n/
├── index.ts          # i18n configuration
└── locales/
    ├── en.json      # English translations
    └── fr.json      # French translations
```

To add a new language:
1. Create a new JSON file in `src/i18n/locales/`
2. Import it in `src/i18n/index.ts`
3. Add it to the messages object

## Environment Setup

Create a `.env` file in the root directory for environment variables:

```bash
# Example
VITE_API_URL=https://api.example.com
```

**Note:** Environment files are automatically ignored by Git for security.

## Type Support for `.vue` Imports

TypeScript cannot handle type information for `.vue` imports by default, so we use `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Code Quality

#### Lint and Format
```sh
# Run all linting tools (ESLint, Stylelint, OXLint)
npm run lint

# Format code with Prettier
npm run format
```

#### Individual Tools
```sh
# ESLint
npm run lint:eslint

# OXLint (faster alternative)
npm run lint:oxlint

# Stylelint for CSS/SCSS
npm run lint:style
npm run lint:style:fix
```

## Node.js Version

This project requires Node.js version `^20.19.0 || >=22.12.0`. Use a version manager like [nvm](https://github.com/nvm-sh/nvm) or [volta](https://volta.sh/) to manage your Node.js versions.
