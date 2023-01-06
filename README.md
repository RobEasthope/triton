# Triton

## Getting started

1. Clone the repository (it helps)
2. VS Code users: Open the repo's works by opening `.vscode/Free-Flight-Academy.code-workspace` and click the pop up button.
3. Run `yarn install` from the repo root (this will also build the Sanity types as a prebuild task)
4. Pull down the environmental variables from Vercel which serves as the source of truth for all the apps. It's a bit fiddly to do this, but it's a one-time thing. Full instructions :point_down:

### Vercel environment variables

1. If you haven't already installed the Vercel CLI run `npm install -g vercel`
2. Run `vercel login` to log in to Vercel
3. Navigate to the each folder in the `./apps` folder and and run `vercel env pull` (If you haven't already then you'll run `vercel link` to link the local code to the Vercel deployment). The name for each deployed app is the same as the folder name.
4. For the Sanity app the `.env` file needs to renamed to `.env.development`

Working on a way to automate this but it may not be possible.

### Dev & build commands

The following commands are available to run code locally:

- Spin up _all_ apps: `yarn dev` or `yarn start` depending on your leaning
- Build _all_ apps: `yarn build`
- Lint the entire codebase: `yarn lint`
- Delete all `node_modules` files in all apps & packages: `yarn clean`

Each app can also be run individually:

- Next app (next-app): `yarn next`
- Storybook (storybook-app): `yarn storybook`
- Sanity (sanity-app): `yarn sanity`

### Localhost paths

The following paths are used be default for the local development:

- Next: `http://localhost:3000/`
- Storybook: `http://localhost:6006/`
- Sanity: `http://localhost:3333/`

By design browser tabs will not open automatically as is the default with Storybook.

## Vercel deployment

### Build commands for Vercel

- Next (next-app): `cd ../.. && yarn types && npx turbo run build --scope=next-app --include-dependencies --no-deps`
- Storybook (storybook-app): `cd ../.. && yarn types && npx turbo run build --scope=storybook-app --include-dependencies --no-deps`
- Sanity (sanity-app): `cd ../.. && yarn types && npx turbo run build --scope=sanity-app --include-dependencies --no-deps`

### Vercel ignore build deployment rules

Adding these rules will minimise the number of Vercel deployments by git diffing the code to see it's relevent for each app in question.

Next: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui-pkg/* ':(exclude)../../packages/ui-pkg/**/*.schema.js' ../../packages/apis-pkg/*`
Storybook: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui-pkg/* ':(exclude)../../packages/ui-pkg/**/*.schema.js' , ../../packages/apis-pkg/*`
Sanity: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui-pkg/*.schema.js`
