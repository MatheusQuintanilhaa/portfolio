import UserSection from "./User/User";
import AboutSection from "./About";
import ProjectsSection from "./Projects";

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
