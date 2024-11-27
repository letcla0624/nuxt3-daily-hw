// https://www.npmjs.com/package/vue-loading-overlay

import { LoadingPlugin, useLoading } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

declare module "#app" {
  interface NuxtApp {
    $useLoading: typeof useLoading;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(LoadingPlugin);
  nuxtApp.provide("useLoading", useLoading);
});
