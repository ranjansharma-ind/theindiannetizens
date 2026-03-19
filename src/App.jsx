import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArticleGrid from "./components/ArticleGrid";
import Centres from "./components/Centres";
import WWR from "./components/WhoWeAre";
import Footer from "./components/Footer";
import SmoothBehavior from "./components/smoothBehavior";

function App() {
  return (
    <div className="min-h-screen bg-white text-navy font-sans overflow-x-hidden selection:bg-saffron selection:text-white">
      <SmoothBehavior />
      <Navbar />
      <main>
        <Hero />
        <ArticleGrid />
        <WWR />
        <Centres />
        <Footer />
      </main>
    </div>
  );
}

export default App;
