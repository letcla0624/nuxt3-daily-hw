# Day 13 - SEO Meta Components 題目

請 clone 這一份模板，在 `/pages/room/[id].vue` 房型詳細頁面作答，完成以下條件 :

- **改寫 SEO Meta 設定**：
  - 將原本使用的 `useSeoMeta({ })` 方法，改為使用 Nuxt3 的 SEO 元件來渲染頁面的 Meta 標籤（如 `<Title>`、`<Meta>` 等）。
  - 使用 `computed` 計算出所需的 SEO Meta 資訊，避免重複邏輯，並將這些資料應用到 SEO 元件中。
  ```
  /*
  請將 useSeoMeta({ }) 改成 Nuxt3 SEO 元件的寫法
  重複邏輯的地方可以使用 computed
  */
  useSeoMeta({
    title: roomObject.value.name,
    titleTemplate: (title) => `Freyja | ${title}`,
    description: () => `${roomObject.value.description}`,
    ogTitle: () => `Freyja | ${roomObject.value.name}`,
    ogDescription: () => `${roomObject.value.description}`,
    ogImage: () => `${roomObject.value.imageUrl}`,
    ogUrl: () => `https://freyja.travel.com.tw/room/${roomObject.value._id}`,
    twitterCard: "summary_large_image",
    twitterTitle: () => `Freyja | ${roomObject.value.name}`,
    twitterDescription: () => `${roomObject.value.description}`,
    twitterImage: () => `${roomObject.value.imageUrl}`,
  });
  ```

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本為：`22.11.0`

### 取得專案

```bash
git clone -b day13-metaComponent-seo https://github.com/letcla0624/nuxt3-daily-hw.git day13-metaComponent-seo
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
