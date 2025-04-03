import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavSection from "./components/LandingPage/NavBar/NavSection";
import MainSection from "./components/LandingPage/Main/MainSection";
import ArticleSection from "./components/LandingPage/ArticleList/ArticleSection";
import ContentPage from "./components/ContentPage/ContentPage";
import AboutSection from "./components/LandingPage/About/AboutSection";
import FooterSection from "./components/LandingPage/Footer/FooterSection";
import ScrollToTop from "./components/ContentPage/ScrollTop/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavSection />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainSection />
              <ArticleSection />
              <AboutSection />
            </>
          }
        />
        <Route path="/article/:id" element={<ContentPage />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;
