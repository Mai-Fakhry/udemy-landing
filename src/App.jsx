import Navbar from "./components/Navbar";
import Hero from "./components/hero-banner";
import Skills from "./components/SkillsSection";
import Courses from "./components/Courses";
import TrustedCompanies from "./components/TrustedCompanies";
import PersonalPlanSection from './components/PersonalPlanSection';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills/>
      <PersonalPlanSection/>
      <Courses />
      <TrustedCompanies />
    </div>
  );
}

export default App;
