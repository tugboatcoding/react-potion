<div style="display: flex; justify-content: center;"">
  <img src="https://raw.githubusercontent.com/tugboatcoding/react-potion/master/logo.png" width="140px" />
</div>

# React Potion

A Notion-like design system. This repo is in not affiliated to Notion in any way.

## Why?

[Notion](http://notion.so/) is great for writing content but also has a nice design sytem for blocks-based design. This repo attempts to replicate some of the benefits that Notion offers.

## Get started

Currently, this repo is only available via a git install.

```bash
npm i -S git+https://github.com/tugboatcoding/react-notion.git
```

To use:

```jsx
import { Cover, Heading } from 'react-notion';

<Cover
  src="https://images.unsplash.com/photo-1589802787293-c7009d1fce33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
/>
<Heading size={900}>Heading 900</Heading>
```

You'll need to transpile the source. To do so, use e.g. [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/):

```js
module: {
  ...config.module,
  rules: [
    ...config.module.rules,
    {
      test: /\.js/,
      include: /node_modules\/react-potion\/.*/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-object-rest-spread'],
        },
      },
    },
  ],
},
```

## Examples

To view examples, open Storybook:

```
npm run storybook
```

![Storybook](https://raw.githubusercontent.com/tugboatcoding/react-design-system-adapters/master/screenshots/storybook.png)
