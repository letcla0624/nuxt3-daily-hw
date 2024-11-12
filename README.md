# Day 7 - 嵌套式路由、useRouter & useRoute 題目

請 clone 這一份模板，將 `/pages/room.vue` 改為嵌套式路由，並實作房型列表與房型詳細頁面（不包含動態路由):

- 房型列表頁面的 URL 需對應 `/room/`，在此頁面使用 ES6 Fetch 或 axios 串接 [前台房型 API](https://nuxr3.zeabur.app/swagger/#/Rooms%20-%20%E6%88%BF%E5%9E%8B) ，將資料寫入 `roomList` 變數 ，並在模板的 v-for 使用 roomList 渲染資料。
- 承上，模板的 HTML 、CSS 已有在 `/pages/room.vue` 中提供，需將其移至房型列表頁面並補上 API 串接的 JavaScript 。
- 房型詳細頁面的 URL 需對應 `/room/_id` ，在此頁顯示 “房型詳細頁面” h2 標題。
- 房型列表頁面的列表渲染之後，經點擊可以換頁至 `/room/_id` 。

> 需注意 : `/room/_id` 的 `/_id` 是靜態路由，非動態路由，請建立名稱為 `_id.vue` 的檔案。

- 在房型詳細頁面中提供一個「回上一頁」的按鈕，點擊後可以使用 router 方法返回 `/room/` 的房型列表頁面。
- 確保房型頁面的巢狀路由內容能正確顯示。

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本為：`20.18.0`

### 取得專案

```bash
git clone -b day7-nested-router https://github.com/letcla0624/nuxt3-daily-hw.git day6-nested-router
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
