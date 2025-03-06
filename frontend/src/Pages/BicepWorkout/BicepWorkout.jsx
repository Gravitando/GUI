import React from 'react'
import './BicepWorkout.css'

function BicepWorkout() {
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
    <h1 className="title">Bicep Workout Routine</h1>

    <div className="image-container">
      <img 
        src="/BeginnerWorkout.jpg"
        alt="Bicep Workout"
        className="workout-image"
      />
    </div>

    <p className="description">
      Build strong and defined biceps with this effective bicep workout routine. Get ready to work your arms and increase strength.
    </p>

    <div className="content-section">
      {/* Workout Routine */}
      <div className="workout-routine">
        <h2>Workout Routine</h2>
        <ul>
          <li>Bicep Curls - 3 sets of 12 reps</li>
          <li>Hammer Curls - 3 sets of 12 reps</li>
          <li>Concentration Curls - 3 sets of 10 reps</li>
          <li>Preacher Curls - 3 sets of 10 reps</li>
          <li>Barbell Curls - 4 sets of 8 reps</li>
          <li>Incline Dumbbell Curls - 3 sets of 12 reps</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="workout-benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Builds bicep strength and size</li>
          <li>Improves arm endurance</li>
          <li>Enhances overall arm definition</li>
          <li>Helps in achieving more powerful lifts</li>
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
          src="https://www.youtube.com/embed/JyV7mUFSpXs?si=DuGt1ypOVHz4iHv-"
          title="Bicep Workout Routine"
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

export default BicepWorkout