import Hero from "./sections/Hero";
import VisionAtAGlance from "./sections/VisionAtAGlance";
import AboutMe from "./sections/AboutMe";
import MomentOfClarity from "./sections/MomentOfClarity";
import DreamCareer from "./sections/DreamCareer";
import SkillsNeeded from "./sections/SkillsNeeded";
import Benefits from "./sections/Benefits";
import Impact from "./sections/Impact";
import Relationships from "./sections/Relationships";
import FutureSelf from "./sections/FutureSelf";
import CareerTimeline from "./sections/CareerTimeline";
import WeeklyCommitment from "./sections/WeeklyCommitment";
import ProfessionalHighlights from "./sections/ProfessionalHighlights";
import QuoteCard from "./components/QuoteCard";
import NavToc from "./components/NavToc";
import FutureVision from "./sections/FutureVision";



function App() {
  return (
    <>
      <NavToc />
      <Hero />
      <VisionAtAGlance />
      <QuoteCard />
      <AboutMe />
      <MomentOfClarity />
      <ProfessionalHighlights />
      <DreamCareer />
      <SkillsNeeded />
      <Benefits />
      <Impact />
      <Relationships />
      <FutureSelf />
      <CareerTimeline />
      <WeeklyCommitment />
      <FutureVision />
      
    </>
  );
}

export default App;