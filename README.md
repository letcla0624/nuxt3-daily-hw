# Day 3 - 使用指令建立 Layouts 題目

請 clone 這一份模板，完成以下條件 :

- 使用 Nuxt3 Layout 功能拆分前台與後台的頁首頁尾區塊
- 前台 index.vue 與 about.vue 頁面皆使用 default.vue 模板 ( 預設 Layout ）
- 後台 admin/index.vue 與 admin/order.vue 頁面皆使用 admin.vue 模板 ( 具名 Layout )

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本為：`20.18.0`

### 取得專案

```bash
git clone -b day3-layout git@github.com:letcla0624/nuxt3-daily-hw.git day3-layout
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
