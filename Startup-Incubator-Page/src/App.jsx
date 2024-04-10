import "./App.css";
import About from "./AboutUs/AboutUs";
import Contact from "./ContactUs/ContactUs";
import Mentors from "./OurMentors/Mentors";
import Footer from "./Footer/Footer";
import Landing from "./Landing/Landing";
import Incubetees from './Incubetees/Incubetees'
import Partner from './Partner/Partner'
import WhatsHappening from './WhatsHappeningAtVoh/WhatsHappening'
import Registration from "./Registration/Registration";
import Advisors from "./Advisors/Advisors";
import Gallery from "./Gallery/Gallery";


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
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
