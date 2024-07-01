# Design System Example
This is a template / example of a design system using Vite, Storybook, Tailwind, and React, and ShadCN. 

## Generating Stories
Stories are generated using the Stackpoint Storybook custom GPT Agent which can be found [here](https://chatgpt.com/share/730b5160-3aaa-48f0-b380-c783a2df8fe1)

To use the Agent, simply copy your component into the chat and make any small import / story name changes as necessary. This agent is highly tuned
to create robust, repeatable Storybook stories. 

## Sharing Tailwind / CSS
1. Note the TailwindCSS config is shared at the root of the workspace and consumed by `/surface-components/tailwind.config.js`
2. Note the styleguide.css is build via a local SASS export. This will likely not be necessary in most projects. This was used here due to different natures of CSS required in a chrome extension vs a react app (:host vs :root). In most cases, the CSS file can be shared directly

## Tech Choices and Why
1. [ShadCN](https://ui.shadcn.com/)
  - Composable, accessible core react components we can style ourselves. Allows us to own a design system from the ground up
2. [TailwindCSS](https://tailwindcss.com/)
  - Shared design language, usable by tech and designer alike, shareable styles config
3. [Vite](https://vitejs.dev/)
  - Absolutely dead simple setup and lightning fast build times
4. [Storybook](https://storybook.js.org/)
  - Developer version of Figma documentation. Provides code snippets, component display, and easy way to work on components visually without needing to boot an app. 

