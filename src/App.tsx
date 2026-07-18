import AboutMe from "./sections/AboutMe";
import MomentOfClarity from "./sections/MomentOfClarity";
import Hero from "./sections/Hero";
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


function App() {
  return (
    <>
      <Hero />
      <QuoteCard />
      <AboutMe />
      <ProfessionalHighlights />
      <MomentOfClarity />
      <DreamCareer />
      <SkillsNeeded />
      <Benefits />
      <Impact />
      <Relationships />
      <FutureSelf />
      <CareerTimeline />
      <WeeklyCommitment />
      
    </>
  );
}

export default App;