import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Contact from "./pages/Contact";

import VirtualTours from "./pages/VirtualTours";
import TourDetail from "./pages/TourDetail";
import FoodCulture from "./pages/FoodCulture";
import FoodDetail from "./pages/FoodDetail";
import Paintings from "./pages/Paintings";
import PaintingDetail from "./pages/PaintingDetail";
import DanceForms from "./pages/DanceForms";
import DanceDetail from "./pages/DanceDetail";
import Music from "./pages/Music";
import MusicDetail from "./pages/MusicDetail";
import Discussions from "./pages/Discussions";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import MyJourney from "./pages/MyJourney";
import Favorites from "./pages/Favorites";
import Wishlist from "./pages/Wishlist";
import Achievements from "./pages/Achievements";

import Admin from "./pages/Admin";
import ContentCreatorDashboard from "./pages/ContentCreatorDashboard";
import GuideDashboard from "./pages/GuideDashboard";

import ManageUser from "./pages/ManageUser";
import ManageContent from "./pages/ManageContent";
import ManageDiscussions from "./pages/ManageDiscussions";

import CreatorContent from "./pages/CreatorContent";

import GuideInsights from "./pages/GuideInsights";
import GuideSessions from "./pages/GuideSessions";
import GuideProfile from "./pages/GuideProfile";
import GuideAnswerQuestions from "./pages/GuideAnswerQuestions";
import GuideResources from "./pages/GuideResources";

import MonumentDetail from "./pages/MonumentDetail";

function App() {
  return (
    <BrowserRouter>

      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 10 + Math.random() * 10 + "s"
            }}
          ></span>
        ))}
      </div>

      <Navbar />

      <div className="page-container">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/foodculture" element={<FoodCulture />} />
          <Route path="/food/:stateName" element={<FoodDetail />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/painting/:paintingName" element={<PaintingDetail />} />
          <Route path="/danceforms" element={<DanceForms />} />
          <Route path="/dance/:danceName" element={<DanceDetail />} />
          <Route path="/music" element={<Music />} />
          <Route path="/music/:musicName" element={<MusicDetail />} />

          <Route path="/virtualtours" element={<VirtualTours />} />
          <Route path="/tour/:id" element={<TourDetail />} />

          <Route path="/discussions" element={<Discussions />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/my-journey" element={<MyJourney />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/achievements" element={<Achievements />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/creator" element={<ContentCreatorDashboard />} />
          <Route path="/guide" element={<GuideDashboard />} />

          <Route path="/admin/users" element={<ManageUser />} />
          <Route path="/admin/content" element={<ManageContent />} />
          <Route path="/admin/discussions" element={<ManageDiscussions />} />

          <Route path="/creator-content" element={<CreatorContent />} />

          <Route path="/guide-insights" element={<GuideInsights />} />
          <Route path="/guide-sessions" element={<GuideSessions />} />
          <Route path="/guide-profile" element={<GuideProfile />} />
          <Route path="/guide-answer" element={<GuideAnswerQuestions />} />
          <Route path="/guide-resources" element={<GuideResources />} />

          <Route path="/monument/:id" element={<MonumentDetail />} />

        </Routes>
      </div>

      <Footer />

    </BrowserRouter>
  );
}

export default App;