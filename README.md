# Day 12 - useSeoMeta 與 useServerSeoMeta 題目

請 clone 這一份模板，在 `/pages/room/[id].vue` 房型詳細頁面作答，完成以下條件 :

- 在取得房型詳細資料的 `roomObject` 物件後，使用 `useSeoMeta` 將 `roomObject` 的資訊寫入 SEO Meta 。
- 伺服器端提交給搜尋引擎爬蟲以及客戶端渲染的 SEO Meta 皆使用使用下方結構的標籤。請撰寫 useSeoMeta({ }) 渲染出下方的 HTML 結構，並將 `{{ }}` 替換成使用 roomObject 物件的資料。

```

<title> Freyja | {{ 房型名稱 }}</title>
<meta name="description" content="{{ 房型描述 }}">
<meta property="og:title" content="Freyja | {{ 房型名稱 }} ">
<meta property="og:description" content="{{ 房型描述 }}">
<meta property="og:image" content="{{房型主圖}}">
<meta property="og:url" content="https://freyja.travel.com.tw/room/{房型 id }">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Freyja | {{ 房型名稱 }}">
<meta name="twitter:description" content="{{ 房型描述 }}">
<meta name="twitter:image" content="{{房型主圖}}">
```

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本為：`22.11.0`

### 取得專案

```bash
git clone -b day12-useSeoMeta-seo https://github.com/letcla0624/nuxt3-daily-hw.git day12-useSeoMeta-seo
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
