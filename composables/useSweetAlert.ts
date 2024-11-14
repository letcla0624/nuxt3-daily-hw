import type { SweetAlertIcon } from "sweetalert2";

// 使用 sweetAlert2 套件顯示訊息
// $swal.fire({
//   position: "center",
//   icon: ...,
//   title: ...,
//   showConfirmButton: false,
//   timer: 1500,
// });

export default function useSweetAlert() {
  // 使用 plugin
  const { $swal } = useNuxtApp();

  const sweetAlert = (icon: SweetAlertIcon, title: string, text?: string) =>
    $swal.fire({
      position: "center",
      icon,
      title,
      text,
      showConfirmButton: false,
      timer: 1500,
    });

  return { sweetAlert };
}
