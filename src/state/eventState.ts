import { atom } from "recoil";
import { MODULE_TYPES, ToastType } from "../constants/constantVariables";

export type EventLink = {
  id: string;
  title: string;
  url: string;
};

export type EventPhoto = {
  id: string;
  url: string;
  caption?: string;
};

export type PrivacySettings = {
  allowGuestPhotos: boolean;
  allowComments: boolean;
  showGuestList: boolean;
  dataRetention: "immediate" | "30days" | "90days";
};

export type ModuleData = {
  links?: EventLink[];
  announcements?: string[];
  photos?: EventPhoto[];
  privacy?: PrivacySettings;
};

export type EventDetails = {
  name: string;
  dateTime: string;
  location: string;
  costPerPerson: string;
  description: string;
  flyer: string;
  backgroundImage: string;
  moduleData?: ModuleData;
};

export const eventState = atom<EventDetails>({
  key: "eventState",
  default: {
    name: "",
    dateTime: "",
    location: "",
    costPerPerson: "",
    description: "",
    flyer:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
    backgroundImage: "",
    moduleData: {
      links: [],
      announcements: [],
      photos: [],
      privacy: {
        allowGuestPhotos: true,
        allowComments: true,
        showGuestList: false,
        dataRetention: "30days",
      },
    },
  },
});

export const modalOpenState = atom({
  key: "modalOpenState",
  default: false,
});

export const dateModalOpenState = atom({
  key: "dateModalOpenState",
  default: false,
});

export const locationModalOpenState = atom({
  key: "locationModalOpenState",
  default: false,
});

export const phoneVerifiedState = atom({
  key: "phoneVerifiedState",
  default: false,
});

export type QuickLinkModule = {
  id: string;
  type: string;
  label: string;
  active: boolean;
};

function typeLabel(type: string): string {
  switch (type) {
    case MODULE_TYPES.PHOTO_GALLERY:
      return "Photo gallery";
    case MODULE_TYPES.LINKS:
      return "Links";
    case MODULE_TYPES.PRIVACY:
      return "Privacy";
    case MODULE_TYPES.ANNOUNCEMENTS:
      return "Announcements";
    default:
      return type;
  }
}

export const modulesState = atom<QuickLinkModule[]>({
  key: "modulesState",
  default: [
    {
      id: MODULE_TYPES.PHOTO_GALLERY,
      type: MODULE_TYPES.PHOTO_GALLERY,
      label: typeLabel(MODULE_TYPES.PHOTO_GALLERY),
      active: false,
    },
    {
      id: MODULE_TYPES.LINKS,
      type: MODULE_TYPES.LINKS,
      label: typeLabel(MODULE_TYPES.LINKS),
      active: false,
    },
    {
      id: MODULE_TYPES.PRIVACY,
      type: MODULE_TYPES.PRIVACY,
      label: typeLabel(MODULE_TYPES.PRIVACY),
      active: false,
    },
    {
      id: MODULE_TYPES.ANNOUNCEMENTS,
      type: MODULE_TYPES.ANNOUNCEMENTS,
      label: typeLabel(MODULE_TYPES.ANNOUNCEMENTS),
      active: false,
    },
  ],
});

export type ToastPayload = {
  message: string;
  type: ToastType | "";
};

export const toastState = atom<ToastPayload>({
  key: "toastState",
  default: {
    message: "",
    type: "",
  },
});
