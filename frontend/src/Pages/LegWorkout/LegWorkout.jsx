import React from 'react'

function LegWorkout() {
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
    <h1 className="title">Leg Workout Routine</h1>

    <div className="image-container">
      <img 
        src="/BeginnerWorkout.jpg"
        alt="Leg Workout"
        className="workout-image"
      />
    </div>

    <p className="description">
      Strengthen and build your leg muscles with this powerful leg workout routine. Target your quads, hamstrings, glutes, and calves.
    </p>

    <div className="content-section">
      {/* Workout Routine */}
      <div className="workout-routine">
        <h2>Workout Routine</h2>
        <ul>
          <li>Squats - 3 sets of 15 reps</li>
          <li>Lunges - 3 sets of 12 reps per leg</li>
          <li>Leg Press - 3 sets of 12 reps</li>
          <li>Leg Curls - 3 sets of 12 reps</li>
          <li>Calf Raises - 3 sets of 20 reps</li>
          <li>Romanian Deadlifts - 3 sets of 12 reps</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="workout-benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Builds overall leg strength</li>
          <li>Improves balance and stability</li>
          <li>Increases endurance and muscle tone</li>
          <li>Essential for athletic performance and posture</li>
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
          src="https://www.youtube.com/embed/H6mRkx1x77k?si=ep9nsnWLsrAxizzj"
          title="Leg Workout Routine"
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

export default LegWorkout