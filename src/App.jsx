import { BrowserRouter } from "react-router-dom";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
  // State for the preloader
  const [isLoading, setIsLoading] = useState(true);

  // Setting timeout for the preloader
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0,0)
    }, [1100]);
  });




  return (
    <>
      {/* Preloader logic */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>


        <BrowserRouter>
        {/* Putting all the page components into a animated routes so we can use useLocation */}
          <AnimatedRoutes />
        </BrowserRouter>
    </>
  );
}
