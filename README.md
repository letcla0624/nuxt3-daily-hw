# Day 18 - Nuxt3 插件 ( Plugins ) - 整合 Vue3 插件 題目

請 clone 這一份模板，完成以下條件 :

- 在 `plugins/loading.js` 中使用 Nuxt3 插件系統整合 [vue-loading-overlay](https://www.npmjs.com/package/vue-loading-overlay) 套件。
- 套件整合後，在 `/pages/index.vue` 中透過按鈕點擊的方式開啟與關閉讀取效果。

```jsx
<script setup>
function openLoading() {
  // 開啟讀取效果
  setTimeout(() => {
     // 關閉讀取效果
  }, 1000);
}
</script>

<template>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>
```

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本為：`22.11.0`

### 取得專案

```bash
git clone -b day18-plugin-use https://github.com/letcla0624/nuxt3-daily-hw.git day18-plugin-use
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
