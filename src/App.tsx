import "./App.css";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { eventState, phoneVerifiedState } from "./state/eventState";
import { FlyerUploader } from "./components/FlyerUploader";
import { BackgroundButton } from "./components/BackgroundButton";
import { PhoneDraftBar } from "./components/PhoneDraftBar";
import { NameCard } from "./components/NameCard";
import { DetailsCard } from "./components/DetailsCard";
import { DescriptionCard } from "./components/DescriptionCard";
import { ModulesRenderer } from "./components/ModulesRenderer";
import { QuickLinksRow } from "./components/QuickLinksRow";
import { DateTimeModal } from "./modals/DateTimeModal";
import { LocationModal } from "./modals/LocationModal";
import { FooterActions } from "./components/FooterActions";
import { ModulesPanel } from "./components/ModulesPanel";
import { Toaster } from "./components/Toaster";

declare global {
  interface Window {
    getEventState?: () => unknown;
    printEventState?: () => void;
  }
}

function App() {
  const event = useRecoilValue(eventState);
  const isPhoneVerified = useRecoilValue(phoneVerifiedState);
  const backgroundStyle = event.backgroundImage
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.8) 100%), url(${event.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  useEffect(() => {
    window.getEventState = () => JSON.parse(JSON.stringify(event));
    window.printEventState = () => console.log("Event state:", event);

    return () => {
      try {
        delete window.getEventState;
        delete window.printEventState;
      } catch (e) {
        //pass
      }
    };
  }, [event]);

  return (
    <div className="app-shell" style={backgroundStyle}>
      <main className="content">
        <div className="desktop-layout">
          <section className="left-column">
            <FlyerUploader />
            <BackgroundButton />
          </section>
          <section className="right-column">
            <div className="form">
              <NameCard />
              <PhoneDraftBar />
              <DetailsCard disabled={!isPhoneVerified} />
              <DescriptionCard disabled={!isPhoneVerified} />
              <ModulesRenderer />
              <QuickLinksRow disabled={!isPhoneVerified} />
              <ModulesPanel />
            </div>
            <FooterActions />
          </section>
        </div>
      </main>
      <DateTimeModal />
      <LocationModal />
      <Toaster />
    </div>
  );
}

export default App;
