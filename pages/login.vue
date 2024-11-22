<script setup lang="ts">
interface Login {
  email: string;
  password: string;
}

interface Token {
  token: string;
}

// 表單格式
const userLoginObject = ref({
  email: "",
  password: "",
});

// 使用 composable
const { sweetAlert } = useSweetAlert();
const runtimeConfig = useRuntimeConfig();

const router = useRouter();
const isDisabled = ref(false);

const loginAccount = async (body: Login) => {
  try {
    isDisabled.value = true;

    const { token } = await $fetch<Token>("/user/login", {
      method: "POST",
      baseURL: runtimeConfig.public.apiUrl,
      body,
    });

    // 將 token 寫入 cookie
    const authCookie = useCookie("auth", {
      path: "/",
    });
    authCookie.value = token;

    // sweetAlert2 顯示訊息
    sweetAlert("success", "登入成功");
    // 完成後清空
    userLoginObject.value = {
      email: "",
      password: "",
    };

    // 登入後跳轉到 orders 頁面
    router.push("/orders");
  } catch (error: any) {
    console.dir(error);
    sweetAlert("error", "登入失敗", error.data.message);
  } finally {
    isDisabled.value = false;
  }
};
</script>

<template>
  <div class="bg-light py-3 py-md-5 vh-100">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
          <div class="bg-white p-4 p-md-5 rounded shadow-sm">
            <h2 class="h3 mb-4">登入</h2>
            <form @submit.prevent="loginAccount(userLoginObject)">
              <div class="form-floating mb-4">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="example@gmail.com"
                  pattern="[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[a-zA-Z]{2,}"
                  v-model="userLoginObject.email"
                  required
                />
                <label for="email">
                  信箱
                  <span class="text-danger">*</span>
                </label>
              </div>

              <div class="form-floating mb-4">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="請輸入 8 碼以上密碼"
                  pattern=".{8,}"
                  v-model="userLoginObject.password"
                  required
                />
                <label for="password">
                  密碼
                  <span class="text-danger">*</span>
                </label>
              </div>
              <div class="d-flex gap-4">
                <button
                  class="btn btn-lg btn-primary w-50"
                  type="submit"
                  :disabled="isDisabled"
                >
                  登入
                </button>
                <NuxtLink
                  to="/register"
                  class="btn btn-lg btn-outline-primary w-50"
                >
                  還沒有帳號
                </NuxtLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
