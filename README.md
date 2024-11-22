# Day 15 - middleware 與登入狀態驗證 題目

請 clone 這一份模板，在 `/pages/login.vue` 與 `/pages/orders.vue` 作答，在登入後檢查帳號是否為登入狀態 :

- 在 `/login`頁面登入成功後，使用 router 導航至 `/orders` 頁面。
- 在進入 `/orders` 頁面之前使用名稱為 “auth” 的具名 middleware 驗證登入狀態。
- 驗證登入需使用旅館的 [/api/v1/user/check](https://nuxr3.zeabur.app/swagger/#/Users%20-%20%E4%BD%BF%E7%94%A8%E8%80%85/get_api_v1_user_check) API ，並使用 try catch 捕捉錯誤 。
- 驗證成功，允許進入 `/orders` 頁面。驗證失敗，將路由導航回 `/login` 頁面。

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本為：`22.11.0`

### 取得專案

```bash
git clone -b day15-middleware https://github.com/letcla0624/nuxt3-daily-hw.git day15-middleware
```

### 環境變數設定

複製 .env.example 檔案給 .env。

```bash
cp .env.example .env
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
