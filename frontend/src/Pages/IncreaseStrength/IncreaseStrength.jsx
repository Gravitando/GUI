import React from 'react'
import './IncreaseStrength.css';

function IncreaseStrength() {
  return (
    <>
    <section className="content1">
      <video autoPlay muted loop className="background-video">
        <source src="/fg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-content">
        <h1>Workout Plans</h1>
        <p>
          The most comprehensive database of free workout routines anywhere!
        </p>
      </div>
    </section>
  
    <div className="beginner-workout-container">
      <h1 className="title">Increase Strength Workout Routine</h1>
  
      <div className="image-container">
        <img 
          src="/BeginnerWorkout.jpg"
          alt="Strength Workout"
          className="workout-image"
        />
      </div>
  
      <p className="description">
        Boost your overall strength and power with this comprehensive strength training workout. Ideal for building muscle and improving physical performance.
      </p>
  
      <div className="content-section">
        {/* Workout Routine */}
        <div className="workout-routine">
          <h2>Workout Routine</h2>
          <ul>
            <li>Deadlifts - 4 sets of 8 reps</li>
            <li>Squats - 4 sets of 10 reps</li>
            <li>Bench Press - 4 sets of 8 reps</li>
            <li>Pull-Ups - 3 sets of 8 reps</li>
            <li>Overhead Press - 3 sets of 10 reps</li>
            <li>Bicep Curls - 3 sets of 12 reps</li>
          </ul>
        </div>
  
        {/* Benefits Section */}
        <div className="workout-benefits">
          <h2>Benefits</h2>
          <ul>
            <li>Increases overall muscle strength</li>
            <li>Improves bone density and stability</li>
            <li>Enhances athletic performance</li>
            <li>Helps with weight management and fat loss</li>
          </ul>
        </div>
      </div>
  
      {/* Video Instructions */}
      <div className="workout-instructions">
        <h2>Workout Instructions</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OPEDjl88P-4?si=8HND03yWd9HfJ4Nq"
            title="Strength Workout Routine"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </>
  

  )
}

export default IncreaseStrength
