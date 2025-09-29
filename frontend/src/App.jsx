import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./Components/MainLayout";
import AdminLayout from "./Admin/AdminLayouts";
import Home from "./Pages/Home";
import AboutUs from "./Pages/About";
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Location from "./Pages/Location";
import Admin from "./Pages/Admin";
import Confirmation from "./Components/ConfirmationForm";
// import ConsultationForm from "./Components/ConsultationSection";
import Blog1 from "./Blog/Blog1";
import Blog2 from "./Blog/Blog2";
import Blog3 from "./Blog/Blog3";


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <HelmetProvider>
//     <App />
//   </HelmetProvider>
// );

const App = () => (
  <Router>
    <div className="font-sans text-gray-800">
      <Routes>
        {/* All public pages, with Header/Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/confirmation" element={<Confirmation />} />
          {/* <Route path="/consultationform" element={<ConsultationForm />} /> */}
          <Route path="/blog/5-effective-ways-to-deal-with-low-self-esteem" element={<Blog1 />} />
          <Route path="/blog/dont-let-stress-get-better-of-you" element={<Blog2 />} />
          <Route path="/blog/seeking-help-before-time-passes-you-by" element={<Blog3 />} />
        </Route>
        {/* Admin pages, no Header/Footer */}
        <Route path="/admin/*" element={<Admin />} />
        {/* Add similar logic for any route that must not show the header/footer */}
      </Routes>
    </div>
  </Router>
);

export default App;
