# Surface Components
Surface Components is a shared component library for use across Surface UI and the Ask extension. 

## Using in Another Package
To use this package in another package within the same pnpm workspace, you can import it like any other package:

### Step 1 - Build The Components
Either from the root of the workspace or from this directory, run `pnpm build`. This creates an executable that can be used in other packages. This is no different from the process of packaging and building an npm lib.

### Step 2 - Add to Dependencies
Remember to add api-client as a dependency in the package.json of the package where you're using it:
```json
{
  "dependencies": {
    "surface-components": "workspace:*"
  }
}
```

### Step 3 - Install
Now that you have added this to your package.json, run `pnpm i` again to install the package as you would with any other package. 

### Step 4 - Use the Components
```javascript
import { StatusIcon, Status } from 'surface-components';

// In your component
<StatusIcon status={Status.Completed} />
// Also, remember to replace Status.Completed with the actual status you want to display.
```

## Building

To build Surface Components, run the following command:
```sh
pnpm run build
```
This will create a production-ready build in the dist directory.

## Storybook

Surface Components uses Storybook for component development and testing. You can start the Storybook dev server with:
```sh
pnpm run storybook
```

And you can build a static version of your Storybook with:

```sh
pnpm run build-storybook
```
