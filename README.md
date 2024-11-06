# Day 2 - Nuxt3 專案引入 CSS 樣式 題目

請 clone 這一份模板，在 Nuxt3 引入 Bootstrap5 v5.3.3 並達成以下條件 :

- 設置 assets/stylesheets 資料夾，在內層新增 all.scss 檔案並引入以下 [bootstrap5 的 SCSS](https://getbootstrap.com/docs/5.3/customize/sass/#importing)

```scss
// assets/stylesheets/all.scss

@import "bootstrap/scss/functions";

@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";

@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";

@import "bootstrap/scss/utilities";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/containers";

@import "bootstrap/scss/buttons";

@import "bootstrap/scss/utilities/api";
```

- 在 Nuxt.config.ts 將 all.scss 加入全域共用樣式
- 新增 page/index 頁面，並使用 Bootstrap5 [按鈕元件](https://getbootstrap.com/docs/5.3/components/buttons/#variants)
- 在 Nuxt.config.ts 設定全域共用 bootstrap5 的 SCSS 變數 ，並且可以直接使用在 .vue 檔案內的 `<style></style>`

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本為：`20.18.0`

### 取得專案

```bash
git clone -b day2-styles git@github.com:letcla0624/nuxt3-daily-hw.git day2-styles
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
