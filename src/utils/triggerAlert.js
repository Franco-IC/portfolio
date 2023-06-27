import { toast } from "react-toastify";

export default function triggerAlert(alertType, message) {
  const alertOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    pauseOnHover: true,
    progress: undefined,
    theme: "light",
    toastId: "form-toast",
  };

  switch (alertType) {
    case "success":
      toast.success(message, {
        ...alertOptions,
        className: "mt-[70px] text-[16px]",
      });
      break;

    case "error":
      toast.error(message, {
        ...alertOptions,
        className: "mt-[70px] text-[16px]",
      });
      break;

    case "warn":
      toast.warn(message, {
        ...alertOptions,
        className: "mt-[70px] text-[16px]",
      });
      break;
  }
}
