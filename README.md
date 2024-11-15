# Day 10 - useFetch 與 useAsyncData 題目

請接續 Day8 題目的練習或是 fork Day8 解答的 [模板](https://github.com/jasonlu0525/nuxt3-live-answer/tree/day8-dynamic-router)，完成以下條件 :

將 pages/room/index.vue 取得房型列表以及 pages/room/[id].vue 取得取得房型詳細資料功能使用的 ES6 fetch() 修改成使用 Nuxt3 useFetch() 或是 useAsyncData() 在伺服器端取得資料。
在 pages/room/index.vue 的房型列表中，點擊房型後能夠進入房型內頁。
進入房型內頁後，透過動態路由的網址參數 [串接 API](https://nuxr3.zeabur.app/swagger/#/Rooms%20-%20%E6%88%BF%E5%9E%8B/get_api_v1_rooms__id_) 取得房型詳細資料。
❗ 需注意 Day8 題目使用的 fetch() 是瀏覽器提供的 Web API ，並非 Nuxt3 的 $fetch 和 ofetch。 兩者沒有任何關連性。

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本為：`20.18.0`

### 取得專案

```bash
git clone -b day10-useAsyncData https://github.com/letcla0624/nuxt3-daily-hw.git day10-useAsyncData
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
