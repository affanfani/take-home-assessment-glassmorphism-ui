import { ArrowIcon } from "./icons/ArrowIcon";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { phoneVerifiedState } from "../state/eventState";
import {
  ToastType,
  PHONE_VERIFICATION_MESSAGES,
  PHONE_VERIFICATION_CONFIG,
  CSS_CLASSES,
  EMOJIS,
} from "../constants/constantVariables";

export function PhoneDraftBar() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<ToastType | "">();
  const setPhoneVerified = useSetRecoilState(phoneVerifiedState);
  const isVerified = useRecoilValue(phoneVerifiedState);

  const showToast = (message: string, type: ToastType) => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage("");
      setToastType("");
    }, PHONE_VERIFICATION_CONFIG.TOAST_DURATION_MS);
  };

  const verifyPhoneNumber = async () => {
    if (!phoneNumber.trim()) {
      showToast(PHONE_VERIFICATION_MESSAGES.EMPTY_PHONE, ToastType.ERROR);
      return;
    }
    setIsLoading(true);
    try {
      await new Promise((resolve) =>
        setTimeout(resolve, PHONE_VERIFICATION_CONFIG.VERIFICATION_DELAY_MS),
      );

      const digitsOnly = phoneNumber.replace(/\D/g, "");
      if (digitsOnly.length >= PHONE_VERIFICATION_CONFIG.MIN_DIGITS) {
        setPhoneVerified(true);
        showToast(
          PHONE_VERIFICATION_MESSAGES.VERIFIED_SUCCESS,
          ToastType.SUCCESS,
        );
      } else {
        showToast(PHONE_VERIFICATION_MESSAGES.INVALID_PHONE, ToastType.ERROR);
      }
    } catch {
      showToast(
        PHONE_VERIFICATION_MESSAGES.VERIFICATION_ERROR,
        ToastType.ERROR,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="glass-card thin-row">
        <div className="row">
          <span className="emoji">{EMOJIS.PHONE}</span>
          <div className="row-content">
            <input
              className="text-input subtle"
              placeholder={PHONE_VERIFICATION_CONFIG.PLACEHOLDER}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={isVerified}
            />
          </div>
          <button
            className="btn icon-pill"
            type="button"
            aria-label={PHONE_VERIFICATION_CONFIG.ARIA_LABEL}
            onClick={verifyPhoneNumber}
            disabled={isLoading || isVerified}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
      {toastMessage && (
        <div
          className={`toast ${CSS_CLASSES[`TOAST_${toastType?.toUpperCase()}` as keyof typeof CSS_CLASSES]}`}
        >
          {toastMessage}
        </div>
      )}
    </>
  );
}
