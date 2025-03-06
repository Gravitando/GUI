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
import Beginner from './Pages/Beginner/Beginner';
import Cardio from './Pages/Cardio/Cardio';
import FatLoss from './Pages/FatLoss/FatLoss';
import IncreaseStrength from './Pages/IncreaseStrength/IncreaseStrength';
import AbsWorkout from './Pages/AbsWorkout/AbsWorkout';
import ChestWorkout from './Pages/ChestWorkout/ChestWorkout';
import BackWorkout from './Pages/BackWorkout/BackWorkout';
import BicepWorkout from './Pages/BicepWorkout/BicepWorkout';
import ShoulderWorkout from './Pages/ShoulderWorkout/ShoulderWorkout';
import LegWorkout from './Pages/LegWorkout/LegWorkout';
import TricepWorkout from './Pages/TricepWorkout/TricepWorkout';
import GluteWorkout from './Pages/GluteWorkout/GluteWorkout';
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
        <Route path="/Workout/Beginner" element={<Beginner />} />
        <Route path="/Workout/Cardio" element={<Cardio />} />
        <Route path="/Workout/FatLoss" element={<FatLoss />} />
        <Route path="/Workout/IncreaseStrength" element={<IncreaseStrength />} />
        <Route path="/Workout/AbsWorkout" element={<AbsWorkout />} />
        <Route path="/Workout/AbsWorkout" element={<AbsWorkout />} />
        <Route path="/Workout/ChestWorkout" element={<ChestWorkout />} />
        <Route path="/Workout/BackWorkout" element={<BackWorkout />} />
        <Route path="/Workout/BicepWorkout" element={<BicepWorkout />} />
        <Route path="/Workout/ShoulderWorkout" element={<ShoulderWorkout />} />
        <Route path="/Workout/LegWorkout" element={<LegWorkout />} />
        <Route path="/Workout/TricepWorkout" element={<TricepWorkout />} />
        <Route path="/Workout/GluteWorkout" element={<GluteWorkout />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
