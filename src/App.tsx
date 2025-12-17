import './App.css'
import { useRecoilValue } from 'recoil'
import { eventState } from './state/eventState'
import { FlyerUploader } from './components/FlyerUploader'
import { BackgroundButton } from './components/BackgroundButton'
import { PhoneDraftBar } from './components/PhoneDraftBar'
import { DetailsCard } from './components/DetailsCard'
import { DescriptionCard } from './components/DescriptionCard'
import { QuickLinksRow } from './components/QuickLinksRow'
import { ModulesPanel } from './components/ModulesPanel'
import { DateTimeModal } from './modals/DateTimeModal'
import { LocationModal } from './modals/LocationModal'
import { FooterActions } from './components/FooterActions'

function App() {
  const event = useRecoilValue(eventState)
  const backgroundStyle = event.backgroundImage
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.8) 100%), url(${event.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {}

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
            <h1 className="page-title">Name your event</h1>
              <PhoneDraftBar />
              <DetailsCard />
              <DescriptionCard />
              {/* <CapacityCard />
              <LinksCard /> */}
              <QuickLinksRow />
              <ModulesPanel />
            </div>
      <FooterActions />
          </section>
        </div>
      </main>
      {/* <HelpButton /> */}
      {/* <PropositionModal /> */}
      <DateTimeModal />
      <LocationModal />
    </div>
  )
}

export default App
