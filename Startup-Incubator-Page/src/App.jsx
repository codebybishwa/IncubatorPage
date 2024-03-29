import "./App.css";
import About from "./AboutUs/AboutUs";
import Contact from "./ContactUs/ContactUs";
import Mentors from "./OurMentors/Mentors";
import Photos from "./OurMentors/Photos.json";
import Footer from "./Footer/Footer";
import SocialMedia from './Components/SocialMedia/SocialMedia'
import NavBar from './Components/NavBar/NavBar'
import Landing from './Landing/Landing'
import Incubetees from './Incubetees/Incubetees'
import Partner from './Partner/Partner'
import WhatsHappening from './WhatsHappeningAtVoh/WhatsHappening'
import Registration from "./Registration/Registration";
import Advisors from "./Advisors/Advisors";

function App() {
  return (
    <>
      <Landing />
      <About />
      <Partner />
      <Incubetees />
      <Mentors />
      <Advisors />
      <WhatsHappening />
      <Registration />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
