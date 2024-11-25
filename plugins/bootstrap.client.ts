import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

// 加入全域輔助函式
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      // https://getbootstrap.com/docs/5.3/components/offcanvas/#options
      offcanvas: (
        element: HTMLDivElement,
        options: { backdrop?: boolean; keyboard?: boolean; focus?: boolean }
      ) => new bootstrap.Offcanvas(element, options),

      // https://getbootstrap.com/docs/5.3/components/modal/#options
      modal: (
        element: HTMLDivElement,
        options: { backdrop?: boolean; keyboard?: boolean; scroll?: boolean }
      ) => new bootstrap.Modal(element, options),
    },
  };
});
