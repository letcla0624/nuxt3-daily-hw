# Day 16 - Nuxt3 插件 ( Plugins )  - provide 題目

請 clone 這一份模板，完成以下條件 :

- 使用 Nuxt3 Plugin 功能在 `/plugins/bootstrap.js` 引入 `bootstrap5 v5.3.3` 版本`Offcanvas` 與 `Modal` 元件的 JavaScript 功能，並將 `new bootstrap.Offcanvas()` 與 `new bootstrap.Modal()` 提供為全域輔助函式。( [Modal 官方文件](https://getbootstrap.com/docs/5.3/components/modal/#methods) 、 [Offcanvas 官方文件](https://getbootstrap.com/docs/5.3/components/offcanvas/#how-it-works))

```jsx
// 加入全域輔助函式

new bootstrap.Offcanvas(element, options);
new bootstrap.Modal(element, options);
```

- 在 `/pages/index.vue` 中，從 Plugin 取出 `Offcanvas` 和 `Modal` 並在 onMounted 生命週期初始化元件。使用 `<template>` 中的按鈕，透過 `@click` 事件來操作元件的 `.show()` 和 `.hide()` 方法，以控制元件的開啟與關閉。
- bootstrap5 SCSS 在模板中已經有提供，不需額外設定。
- 請根據下圖 bootstrap5 v5.3.3 Modal 功能的 [原始碼](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.js) 判斷 Plugin 是否需要限制插件的執行環境（伺服器端或客戶端，或是無需限制）。
  ![題目示意圖](image.png)

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本為：`22.11.0`

### 取得專案

```bash
git clone -b day16-plugin-provide https://github.com/letcla0624/nuxt3-daily-hw.git day16-plugin-provide
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
