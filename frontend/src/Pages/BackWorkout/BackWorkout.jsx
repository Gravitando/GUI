import React from 'react'

function BackWorkout() {
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
    <h1 className="title">Back Workout Routine</h1>

    <div className="image-container">
      <img 
        src="/BeginnerWorkout.jpg"
        alt="Back Workout"
        className="workout-image"
      />
    </div>

    <p className="description">
      Strengthen your back and improve posture with this effective back workout routine. Designed to build strength and endurance for a powerful upper body.
    </p>

    <div className="content-section">
      {/* Workout Routine */}
      <div className="workout-routine">
        <h2>Workout Routine</h2>
        <ul>
          <li>Pull-ups - 3 sets of 8 reps</li>
          <li>Barbell Rows - 4 sets of 10 reps</li>
          <li>Lat Pulldowns - 4 sets of 12 reps</li>
          <li>Single Arm Dumbbell Rows - 3 sets of 12 reps</li>
          <li>Deadlifts - 4 sets of 8 reps</li>
          <li>Face Pulls - 3 sets of 15 reps</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="workout-benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Strengthens upper back and core</li>
          <li>Improves posture and reduces back pain</li>
          <li>Increases muscle endurance</li>
          <li>Helps with overall body strength and balance</li>
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
          src="https://www.youtube.com/embed/Sa0sBKUiOvU?si=ddDD_F6A99GTU9cU"
          title="Back Workout Routine"
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

export default BackWorkout