import React from 'react'

function GluteWorkout() {
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
      <h1 className="title">Glute Workout Routine</h1>
  
      <div className="image-container">
        <img 
          src="/BeginnerWorkout.jpg"
          alt="Glute Workout"
          className="workout-image"
        />
      </div>
  
      <p className="description">
        Strengthen and tone your glutes with this targeted workout routine. Focus on building a firm and toned posterior with these exercises.
      </p>
  
      <div className="content-section">
        {/* Workout Routine */}
        <div className="workout-routine">
          <h2>Workout Routine</h2>
          <ul>
            <li>Squats - 3 sets of 15 reps</li>
            <li>Hip Thrusts - 3 sets of 12 reps</li>
            <li>Glute Bridges - 3 sets of 20 reps</li>
            <li>Walking Lunges - 3 sets of 12 reps per leg</li>
            <li>Bulgarian Split Squats - 3 sets of 12 reps per leg</li>
            <li>Donkey Kicks - 3 sets of 15 reps per leg</li>
          </ul>
        </div>
  
        {/* Benefits Section */}
        <div className="workout-benefits">
          <h2>Benefits</h2>
          <ul>
            <li>Strengthens and tones the glutes</li>
            <li>Improves lower body strength and endurance</li>
            <li>Enhances overall lower body aesthetics</li>
            <li>Can be done without equipment</li>
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
            src="https://www.youtube.com/embed/WWu9E0terf4?si=49rJq6pdEsi5lDX8"
            title="Glute Workout Routine"
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

export default GluteWorkout