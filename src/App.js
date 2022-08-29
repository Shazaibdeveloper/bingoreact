import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Errorpage from './pages/Errorpage';
import Blog from './pages/Blog';
import Singlepost from './pages/Singlepost';
import Indexhome from './pages/Indexhome';
import Indextext from './pages/Indextext';
import Onepagetext from './pages/Onepagetext';
import Onepageslider from './pages/Onepageslider';

function App() {
  return (
     <>
     <BrowserRouter>
       <Routes>
          <Route path="/"               element={<Home />}/>
          <Route path="/home"           element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/service"        element={<Service />} />
          <Route path="/Portfolio"      element={<Portfolio />} />
          <Route path="/team"           element={<Team />} />
          <Route path="/pricing"        element={<Pricing />} />
          <Route path="/contact"        element={<Contact />} />
          <Route path="/errorpage"      element={<Errorpage />} />
          <Route path="/blog"           element={<Blog />} />
          <Route path="/singlepost"     element={<Singlepost />} />
          <Route path="/indexhome"      element={<Indexhome />} />
          <Route path="/indextext"      element={<Indextext />} />
          <Route path="/onepagetext"    element={<Onepagetext />} />
          <Route path="/onepageslider"  element={<Onepageslider />} />

       </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
