import "./App.css";
import About from "./AboutUs/AboutUs";
import Contact from "./ContactUs/ContactUs";
import Mentors from "./OurMentors/Mentors";
import Photos from "./OurMentors/Photos.json";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <About />
    <Contact />

      {/* <Mentors photos={Photos} /> */}
      <Footer />
    </>
  );
}

export default App;
