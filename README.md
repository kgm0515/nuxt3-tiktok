# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 一款快速生成 Vue3 代码的插件：Vue VSCode Snippets

vbase-3-ts-setup

## 免费的视频库

https://pixabay.com/videos/

## 开始

安装 create-vite: https://cn.vitejs.dev/guide/

`npm create vite@latest my-vue-app --template vue`

安装依赖

`pnpm i`

## 接入 tailwindcss

安装 tailwindcss: https://www.tailwindcss.cn/docs/guides/nuxtjs#3

```sh
# Install tailwindcss and its peer dependencies via npm, and then run the init command to generate a tailwind.config.js file.
npm install -D tailwindcss postcss autoprefixer
# generate tailwindcss.config.js
npx tailwindcss init
```

创建 css 文件: ./assets/css/main.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

修改配置 nuxt.config.ts

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  // Add tailwindcss and autoprefixer to the postcss.plugins object in your nuxt.config.js file.
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  // Add your newly-created ./assets/css/main.css to the css array in your nuxt.config.js file.
  css: ['~/assets/css/main.css']
})
```

修改配置 tailwind.config.js

```ts
// tailwind.config.js
export default defineNuxtConfig({
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue'],
  theme: {
    extend: {}
  },
  plugins: []
})
```

## 安装图标库

安装: https://nuxt.com.cn/modules/icons

icons 网址：https://icones.js.org/

`npm install --save-dev nuxt-icon`

配置

```js
// Add it to the modules array in your nuxt.config.ts:
import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  modules: ['nuxt-icon']
})
```

使用案例

```vue
<!-- When using an icon from Iconify, an <svg> will be created, you can give all the attributes of the native element. -->
<Icon name="uil:github" color="black" />
<!-- Iconify dataset: You can use any name from the https://icones.js.org collection: -->
<Icon name="uil:github" />
<!-- Emoji -->
<Icon name="🚀" />
<!-- Vue component: Note that NuxtIcon needs to be inside components/global/ folder  -->
<Icon name="NuxtIcon" />
```

## 安装 Pinia

安装：https://www.npmjs.com/package/@pinia/nuxt

`npm i @pinia/nuxt`

修改配置 nuxt.config.ts: https://nuxt.com.cn/modules/pinia

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt']
})
```

## Pinia 状态持久化插件

https://nuxt.com.cn/modules/pinia-plugin-persistedstate

`npm i @pinia-plugin-persistedstate/nuxt`

修改配置 nuxt.config.ts

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@pinia-plugin-persistedstate/nuxt']
})
```

1. Add the plugin to pinia:

```js
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
```

2. Add the persist option to the store you want to be persisted:

```js
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      someState: 'hello pinia'
    }
  },
  persist: true
})
```

## 安装 axios

`npm i axios`
