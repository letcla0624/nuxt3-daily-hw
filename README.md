# Day 14 - 登入功能與存入 Cookie 題目

請 clone 這一份模板實作帳號登入功能 :

- 作答前需要先在 `/pages/register.vue` 使用模板提供的操作介面註冊帳號，格式如下:
  - 所有欄位都必填。
  - 密碼需要至少 8 碼以上，並英數混合。
  - 電話格式可以是手機號碼與市內電話。
  - birthday 格式可以是 "yyyy-mm-dd”。
  - zipcode 需要對照到各縣市各區的郵遞區號，可以參考 [郵遞區號速查一覽表](https://c2e.ezbox.idv.tw/zipcode.php)。
- 在 `/pages/login.vue` 頁面串接旅館的 [登入 API](https://nuxr3.zeabur.app/swagger/#/Users%20-%20%E4%BD%BF%E7%94%A8%E8%80%85/post_api_v1_user_login) ( 需使用 try catch )。登入成功後，使用 `useCookie()` 將 token 寫入名稱為 “auth” 的 cookie。
- 登入成功與失敗皆使用 [sweetAlert2 套件](https://sweetalert2.github.io/) 顯示訊息。sweetAlert2 套件在模板已有安裝與引入，不需再額外設定。

```jsx
$swal.fire({
  position: "center",
  icon: ... ,
  title: ... ,
  showConfirmButton: false,
  timer: 1500,
});
```

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本為：`22.11.0`

### 取得專案

```bash
git clone -b day14-useCookie-login https://github.com/letcla0624/nuxt3-daily-hw.git day14-useCookie-login
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
