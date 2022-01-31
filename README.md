# Triquetra

## Getting started

### Build dev

- Spin up all apps: `yarn dev`
- Next (trq-next): `npx turbo run dev --scope=trq-next --include-dependencies --no-deps`
- Storybook (trq-storybook): `npx turbo run dev --scope=trq-storybook --include-dependencies --no-deps`
- Sanity (trq-sanity): `npx turbo run dev --scope=trq-sanity --include-dependencies --no-deps`

### Build commands

- Build all apps: `yarn build`
- Next (trq-next): `npx turbo run build --scope=trq-next --include-dependencies --no-deps`
- Storybook (trq-storybook): `npx turbo run build --scope=trq-storybook --include-dependencies --no-deps`
- Sanity (trq-sanity): `npx turbo run build --scope=trq-sanity --include-dependencies --no-deps`

## Ignore build deployment rules

Next: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/* ../../packages/utils`
Storybook: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/*`
Sanity: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/*.schema.js ../../packages/ui/utils/sanity ../../packages/utils`
