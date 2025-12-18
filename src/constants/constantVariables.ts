export enum ToastType {
  SUCCESS = "success",
  ERROR = "error",
}

export const MODULE_TYPES = {
  PHOTO_GALLERY: "photoGallery",
  LINKS: "links",
  PRIVACY: "privacy",
  ANNOUNCEMENTS: "announcements",
};

export const PHONE_VERIFICATION_MESSAGES = {
  EMPTY_PHONE: "Please enter a phone number",
  VERIFIED_SUCCESS: "Phone number verified! You can now proceed.",
  INVALID_PHONE: "Invalid phone number. Please enter a valid number.",
  VERIFICATION_ERROR: "Error verifying phone number",
} as const;

export const PHONE_VERIFICATION_CONFIG = {
  MIN_DIGITS: 10,
  VERIFICATION_DELAY_MS: 500,
  TOAST_DURATION_MS: 3000,
  PLACEHOLDER: "Enter phone number to save the draft",
  ARIA_LABEL: "Verify phone number",
} as const;

export const INPUT_PLACEHOLDERS = {
  EVENT_NAME: "Name your event",
  EVENT_DESCRIPTION: "Describe your event",
  COST_PER_PERSON: "Cost per person",
  DATE_TIME: "Date and time",
  LOCATION: "Add Location",
} as const;

export const BUTTON_LABELS = {
  SHOW_MORE: "Show more",
  SHOW_LESS: "Show less",
  CUSTOMIZE: "Customize",
  GO_LIVE: "Go live",
  CHANGE_BACKGROUND: "Change background",
} as const;

export const EMOJIS = {
  PHONE: "📱",
  CALENDAR: "🗓️",
  LOCATION: "📍",
  MONEY: "💵",
  GALLERY: "🎨",
  CHAT: "💬",
  HELP: "❓",
} as const;

export const CSS_CLASSES = {
  TOAST_SUCCESS: "toast-success",
  TOAST_ERROR: "toast-error",
  PILL_ACTIVE: "pill-active",
  DISABLED: "disabled",
} as const;

export const MODULE_LABELS = {
  PHOTO_GALLERY: "Photo gallery",
  LINKS: "Links",
  PRIVACY: "Privacy",
  ANNOUNCEMENTS: "Announcements",
} as const;

export const MODAL_MESSAGES = {
  DATE_TIME: "Select date and time",
  LOCATION: "Select location",
} as const;
