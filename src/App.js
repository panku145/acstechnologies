// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import ContactTest from "./pages/ContactTest";
import DigitalMarketing from "./pages/DigitalMarketing";
import Development from "./pages/Development";
import Designing from "./pages/Designing";
import ItHelpDesk from "./pages/ItHelpDesk";
import GraphicDesigning from "./pages/GraphicDesigning";
import ReactPage from "./pages/React";
import NodePage from "./pages/Node";
import AngularPage from "./pages/Angular";
import WordpressPage from "./pages/Wordpress";
import Prices from "./pages/Prices";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import SAP from "./pages/SAP";
import NewReact from "./pages/NewReact";
import NewWordPress from "./pages/NewWordPress";
import NewAngular from "./pages/NewAngular";
import Net from "./pages/Net";
import Noc from "./pages/Noc";
import PhpDev from "./pages/PhpDev";
import MernStack from "./pages/MernStack";
import SabBasis from "./pages/SabBasis";
import Soc from "./pages/Soc";
import DataCenter from "./pages/DataCenter";
import AppDev from "./pages/AppDev";
import EmailMarketing from "./pages/EmailMarketing";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Routes>
          <Route path="/career" element={<Career />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/digital-marketing/:id" element={<DigitalMarketing />} />
        </Routes>
        <Routes>
          <Route path="/development" element={<Development />} />
        </Routes>
        <Routes>
          <Route path="/web-designing" element={<Designing />} />
        </Routes>
        <Routes>
          <Route path="/it-help-desk" element={<ItHelpDesk />} />
        </Routes>
        <Routes>
          <Route path="/graphic-designing" element={<GraphicDesigning />} />
        </Routes>
        <Routes>
          <Route path="/react" element={<ReactPage />} />
        </Routes>
        <Routes>
          <Route path="/node" element={<NodePage />} />
        </Routes>
        <Routes>
          <Route path="/angular" element={<AngularPage />} />
        </Routes>
        <Routes>
          <Route path="/wordpress" element={<WordpressPage />} />
        </Routes>
        <Routes>
          <Route path="/prices" element={<Prices />} />
        </Routes>
        <Routes>
          <Route path="/app-designing" element={<AppDev />} />
        </Routes>
        <Routes>
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Routes>
          <Route path="/sap-abap" element={<SAP />} />
        </Routes>
        <Routes>
          <Route path="/reactjs" element={<NewReact />} />
        </Routes>
        <Routes>
          <Route path="/wordpress-development" element={<NewWordPress />} />
        </Routes>
        <Routes>
          <Route path="/angular-development" element={<NewAngular />} />
        </Routes>
        <Routes>
          <Route path="/net-developer" element={<Net />} />
        </Routes>
        <Routes>
          <Route path="/noc-support" element={<Noc />} />
        </Routes>
        <Routes>
          <Route path="/soc-support" element={<Soc />} />
        </Routes>
        <Routes>
          <Route path="/Contactsec" element={<ContactTest />} />
        </Routes>
        <Routes>
          <Route path="/php-developer" element={<PhpDev />} />
        </Routes>
        <Routes>
          <Route path="/mern-stack" element={<MernStack />} />
        </Routes>
        <Routes>
          <Route path="/sab-basis" element={<SabBasis />} />
        </Routes>
        <Routes>
          <Route path="/data-center" element={<DataCenter />} />
        </Routes>
        <Routes>
          <Route path="/email-marketing" element={<EmailMarketing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
