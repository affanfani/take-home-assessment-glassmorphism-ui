import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { toastState } from "../state/eventState";
import {
  CSS_CLASSES,
  PHONE_VERIFICATION_CONFIG,
} from "../constants/constantVariables";

export function Toaster() {
  const [toast, setToast] = useRecoilState(toastState);

  useEffect(() => {
    if (!toast.message) return;
    const t = setTimeout(
      () => setToast({ message: "", type: "" }),
      PHONE_VERIFICATION_CONFIG.TOAST_DURATION_MS,
    );
    return () => clearTimeout(t);
  }, [toast, setToast]);

  if (!toast.message) return null;

  const key = `TOAST_${toast.type?.toUpperCase()}` as keyof typeof CSS_CLASSES;
  const className = `toast ${CSS_CLASSES[key] || "toast-success"}`;

  return <div className={className}>{toast.message}</div>;
}
