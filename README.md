# Day 8 - 動態路由與 404 錯誤頁面處理 題目

請 clone 這一份模板，接續 Day7 嵌套式路由的問題，實作房型詳細頁面的動態路由 :

- 將 `pages/room/_id.vue` 調整成房型內頁的動態路由。
- 在 `pages/room/index.vue` 的房型列表中，點擊房型後能夠進入房型內頁。進入房型內頁後，透過動態路由的網址參數 [串接 `/api/v1/rooms/{id}` 這支 API](https://nuxr3.zeabur.app/swagger/#/Rooms%20-%20%E6%88%BF%E5%9E%8B/get_api_v1_rooms__id_) 來取得房型詳細資料。可以使用 `fetch` 或 `axios` 來串接 API。
- 取得房型資料後，將資料內容渲染在畫面上。畫面的 HTML 、CSS 已有在 `pages/room/_id.vue` 提供。
- 將 pages/notfound.vue 調整成全站的 404 頁面。畫面的 HTML 和 CSS 已經在 `pages/notfound.vue` 中提供。請在 `{{ page }}` 中渲染當前訪問頁面的路由路徑，並提供一個返回首頁的連結。

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本為：`20.18.0`

### 取得專案

```bash
git clone -b day8-dynamic-router https://github.com/letcla0624/nuxt3-daily-hw.git day8-dynamic-router
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
