import logo from './logo.svg';
import { HashRouter, Route, Routes } from "react-router-dom";
import { CustomNavBar } from "./components/CustomNavBar";
import { Home } from "./views/Home";
import { Section1 } from "./views/Section1";
import { Section2 } from "./views/Section2";
import { Section3 } from "./views/Section3";
import "./utils/styles/App.css";
function App() {
  return (
 <HashRouter>
      <CustomNavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/section1" element={<Section1 />} />
              <Route path="/section2" element={<Section2 />} />
              <Route path="/section3" element={<Section3 />} />
            </Routes>

          </HashRouter>
  );
}

export default App;
