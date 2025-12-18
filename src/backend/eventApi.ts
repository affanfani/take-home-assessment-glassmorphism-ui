import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  eventState,
  modulesState,
  type EventDetails,
  type QuickLinkModule,
} from "../state/eventState";
import { MODULE_TYPES } from "../constants/constantVariables";
export function useEventApi() {
  const event = useRecoilValue(eventState);
  const setEvent = useSetRecoilState(eventState);

  const createEvent = (data?: Partial<EventDetails>) => {
    setEvent((prev) => ({ ...prev, ...data }));
  };

  const updateEvent = (data: Partial<EventDetails>) => {
    setEvent((prev) => ({ ...prev, ...data }));
  };

  return { event, createEvent, updateEvent };
}

export function useModulesApi() {
  const modules = useRecoilValue(modulesState);
  const setModules = useSetRecoilState(modulesState);

  const addModule = (type: string) => {
    const exists = modules.find((m) => m.type === type);
    if (exists) {
      setModules((prev) =>
        prev.map((m) => (m.id === exists.id ? { ...m, active: true } : m)),
      );
      return;
    }
    const id = `${type}-${Date.now()}`;
    const label = typeLabel(type);
    const next: QuickLinkModule = { id, type, label, active: true };
    setModules((prev) => [...prev, next]);
  };

  const removeModule = (id: string) => {
    setModules((prev) =>
      prev.map((m) => (m.id === id ? { ...m, active: false } : m)),
    );
  };

  const toggleModule = (id: string) => {
    setModules((prev) =>
      prev.map((m) => (m.id === id ? { ...m, active: !m.active } : m)),
    );
  };

  return { modules, addModule, removeModule, toggleModule };
}

export function typeLabel(type: string): string {
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
