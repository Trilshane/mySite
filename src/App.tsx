import { FC, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Works from "./pages/Works";
import Contacts from "./pages/Contacts";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const App: FC = () => {
  const [loaded, isloaded] = useState<boolean>(false);

  if (!loaded) {
    setTimeout(() => {
      isloaded(true);
    }, 2000);
  }

  return (
    <>
      {!loaded && <Preloader />}
      {loaded && (
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </HashRouter>
      )}
    </>
  );
};
export default App;
