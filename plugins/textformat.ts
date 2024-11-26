import type { DirectiveBinding } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("textformat", {
    mounted(element: HTMLDivElement, binding: DirectiveBinding<string>) {
      const transText = {
        uppercase: binding.value.toUpperCase(),
        lowercase: binding.value.toLowerCase(),
      };

      const arg = binding.arg as "uppercase" | "lowercase";
      if (arg !== "uppercase" && arg !== "lowercase") return;

      element.innerText = transText[arg!];
    },
  });
});
