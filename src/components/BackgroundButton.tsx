import { useRef } from "react";
import type { ChangeEvent } from "react";
import { useEventApi } from "../backend/eventApi";

export function BackgroundButton() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { updateEvent } = useEventApi();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        updateEvent({ backgroundImage: reader.result });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <button
        className="btn background-btn"
        type="button"
        onClick={() => fileInputRef.current?.click()}
      >
        <span className="emoji">🖼️</span>
        <span className="label">Change background</span>
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/jpg"
        className="hidden-input"
        onChange={handleFileChange}
      />
    </>
  );
}
