import UserSection from "./User/User";
import AboutSection from "./About/About";
import ProjectsSection from "./Projects/Projects";

const PersonalInformations = () => {
  return (
    <div className="app">
      <UserSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
};

export default PersonalInformations;
