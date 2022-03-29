# Triquetra

## Getting started

### Build dev

- Spin up all apps: `yarn dev`
- Build all apps: `yarn build`
- Next (trq-next): `yarn next`
- Remix (trq-remix): `yarn remix`
- Storybook (trq-storybook): `yarn storybook`
- Sanity (trq-sanity): `yarn sanity`

### Build commands for Vercel

- Next (trq-next): `cd ../.. && npx turbo run build --scope=trq-next --include-dependencies --no-deps`
- Remix (trq-remix): `cd ../.. && npx turbo run build --scope=trq-remix --include-dependencies --no-deps`
- Storybook (trq-storybook): `cd ../.. && npx turbo run build --scope=trq-storybook --include-dependencies --no-deps`
- Sanity (trq-sanity): `cd ../.. && npx turbo run build --scope=trq-sanity --include-dependencies --no-deps`

## Ignore build deployment rules

Next: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/* ../../packages/utils`
Remix: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/* ../../packages/utils`
Storybook: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/*`
Sanity: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/*.schema.js ../../packages/ui/utils/sanity ../../packages/utils`
