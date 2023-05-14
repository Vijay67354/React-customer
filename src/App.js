import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Services from "./component/Services";
import TeamCrm from "./component/TeamCrm";
import Partner from "./component/Partner";
import Client from "./component/Client";
import Great from "./component/Great";
import Sales from "./component/Sales";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ScrollToTop from "./component/ScrollToTop";
function App() {
    return ( 
   
        <BrowserRouter>
       
      <Routes>
        <Route>
          <Route/>
          <Route path="/" element={<ScrollToTop/>} />
          <Route path="Navbar" element={<Navbar/>} />
          <Route path="Partner" element={<Partner />} />
          <Route path="Navbar" element={<Navbar />} />
          <Route path="TeamCrm" element={<TeamCrm />} />
          <Route path="Services" element={<Services />} />
          <Route path="Client" element={<Client />} />
          <Route path="Great" element={<Great/>} />
          <Route path="Sales" element={<Sales/>} />
          <Route path="Footer" element={<Footer/>} />
          <Route path="Header" element={<Header/>} />
       
        </Route>
      </Routes>
   
    </BrowserRouter>
  
);
}

export default App