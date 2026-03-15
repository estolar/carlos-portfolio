import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Credentials from "../components/Credentials/Credentials.jsx";
import About from "../components/About/About.jsx";
import Expertise from "../components/Expertise/Expertise.jsx";
import Certifications from "../components/Certifications/Certifications.jsx"


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Credentials />
      <About />
      <Expertise />
      <Certifications />
    </>
  );
}

export default Home;