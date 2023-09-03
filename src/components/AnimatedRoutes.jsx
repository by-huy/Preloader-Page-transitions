import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../layouts/Layout";
import Homepage from "../pages/Homepage";   
import About from "../pages/About";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    // Need useLocation for framer motion to know which page is current
    const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
