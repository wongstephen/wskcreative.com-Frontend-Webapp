import { useRef } from "react";
import { Filler } from "./components/Filler";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Services } from "./components/Services";
import { Contact } from "./Contact";

function App() {
  const contactRef = useRef(null);
  const scrollToElement = () => contactRef.current.scrollIntoView();
  return (
    <div className="App">
      <NavBar />
      <Header contactBtn={scrollToElement} />
      <Services />
      <Filler />
      <Contact refs={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
