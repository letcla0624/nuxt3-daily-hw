export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("timeformat", {
    mounted(element, binding) {
      const dateTime = new Date(binding.value)
        .toLocaleString("zh-TW", { hour12: false })
        .replaceAll("/", "-");

      element.innerText = dateTime;
    },
  });
});
