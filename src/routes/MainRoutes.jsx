import { BrowserRouter as Router, Routes, Route } from "react-router";
import ROUTES from "./routes";

// Import Pages


import Home1 from "../pages/home/Home1";
import Home2 from "../pages/home/Home2";
import Home3 from "../pages/home/Home3";
import About from "../pages/pages/AboutUs";






const MainRoutes = () => {
  return (
    <Routes>
     <Route path={ROUTES.HOME1} element={<Home1 />} />;
     <Route path={ROUTES.HOME2} element={<Home2 />} />;
     <Route path={ROUTES.HOME3} element={<Home3 />} />;
     <Route path={ROUTES.ABOUT} element={<About />} />;








      

    </Routes>
  );
};

export default MainRoutes;
