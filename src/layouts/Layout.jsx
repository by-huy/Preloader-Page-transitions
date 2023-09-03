import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion, useIsPresent } from "framer-motion";

export default function Layout() {
  const isPresent = useIsPresent();

  return (
    <div className="bg-[#101010] font-satoshi">
      <Navbar />
      <Outlet />
      {/* Putting the motion div here will add the page transitions for all routes */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 h-screen w-screen bg-white flex justify-center items-center text-black"
      >
        <span className="font-bold tracking-tight " href="">
          ContemptStudios
        </span>
      </motion.div>
    </div>
  );
}
