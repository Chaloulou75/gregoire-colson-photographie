# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Photography website for Grégoire Colson, built with Nuxt 4 and Vue 3.

## Commands

- `npm run dev` — Start dev server on http://localhost:3000
- `npm run build` — Build for production
- `npm run generate` — Generate static site
- `npm run preview` — Preview production build locally

## Architecture

- **Nuxt 4** with the `app/` directory convention (source code lives under `app/`)
- **Vue 3** with Composition API
- TypeScript enabled; tsconfig references are auto-generated in `.nuxt/`
- Nuxt DevTools enabled
- Package manager: npm
