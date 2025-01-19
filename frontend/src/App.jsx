import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About us/AboutUs';
import Login from './Pages/Login/Login';
import Workout from './Pages/Workout/Workout';
import DietPlan from './Pages/DietPlan/DietPlan';
import Footer from './Components/Footer/Footer';
import ProteinShakes from './Pages/ProteinShakes/ProteinShakes';
import Proteinbars from './Pages/Proteinbars/Proteinbars';
import Highprotein from './Pages/Highprotein/Highprotein';
import Lowcarb from './Pages/Lowcarb/Lowcarb';
import Snacks from './Pages/snacks/snacks';
import Vegetarian from './Pages/Vegetarian/Vegetarian';
import Breakfast from './Pages/Breakfast/Breakfast';
import Lunch from './Pages/Lunch/Lunch';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <>
      <Navbar />
      {/* ScrollToTop should be outside the Routes */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Workout" element={<Workout />} />
        <Route path="/DietPlan" element={<DietPlan />} />
        <Route path="/DietPlan/ProteinShakes" element={<ProteinShakes />} />
        <Route path="/DietPlan/Proteinbars" element={<Proteinbars />} />
        <Route path="/DietPlan/Highprotein" element={<Highprotein />} />
        <Route path="/DietPlan/Lowcarb" element={<Lowcarb />} />
        <Route path="/DietPlan/Snacks" element={<Snacks />} />
        <Route path="/DietPlan/Vegetarian" element={<Vegetarian />} />
        <Route path="/DietPlan/Breakfast" element={<Breakfast />} />
        <Route path="/DietPlan/Lunch" element={<Lunch />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
