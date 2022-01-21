# Free Flight Academy

## Getting started

### Build dev

- Spin up all apps: `yarn dev`
- Next (trq-next): `npx turbo run dev --scope=trq-next --includeDependencies --no-deps`
- Storybook (trq-storybook): `npx turbo run dev --scope=trq-storybook --includeDependencies --no-deps`
- Sanity (trq-sanity): `npx turbo run dev --scope=trq-sanity --includeDependencies --no-deps`

### Build commands

- Build all apps: `yarn build`
- Next (trq-next): `npx turbo run build --scope=trq-next --includeDependencies --no-deps`
- Storybook (trq-storybook): `npx turbo run build --scope=trq-storybook --includeDependencies --no-deps`
- Sanity (trq-sanity): `npx turbo run build --scope=trq-sanity --includeDependencies --no-deps`

## Ignore build deployment rules

Next: `git diff --quiet HEAD^ HEAD ./`
Storybook: `git diff --quiet HEAD^ HEAD ./`
Sanity: `git diff --quiet HEAD^ HEAD ./ ../next/*.schema.js ../next/utils`
