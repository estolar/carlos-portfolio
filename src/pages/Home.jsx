import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Credentials from "../components/Credentials/Credentials";
import About from "../components/About/About";
import Expertise from "../components/Expertise/Expertise";
import Certifications from "../components/Certifications/Certifications";
import Timeline from "../components/Timeline/Timeline";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Credentials />
        <About />
        <Expertise />
        <Certifications />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;