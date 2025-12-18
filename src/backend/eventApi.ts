import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  eventState,
  modulesState,
  type EventDetails,
} from "../state/eventState";
export function useEventApi() {
  const event = useRecoilValue(eventState);
  const setEvent = useSetRecoilState(eventState);

  const updateEvent = (data: Partial<EventDetails>) => {
    setEvent((prev) => ({ ...prev, ...data }));
  };

  return { event, updateEvent };
}

export function useModulesApi() {
  const modules = useRecoilValue(modulesState);
  const setModules = useSetRecoilState(modulesState);

  const toggleModule = (id: string) => {
    setModules((prev) =>
      prev.map((m) => (m.id === id ? { ...m, active: !m.active } : m)),
    );
  };

  return { modules, toggleModule };
}
