import React from 'react'

function TricepWorkout() {
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
    <h1 className="title">Tricep Workout Routine</h1>

    <div className="image-container">
      <img 
        src="/BeginnerWorkout.jpg"
        alt="Tricep Workout"
        className="workout-image"
      />
    </div>

    <p className="description">
      Build your tricep muscles with these targeted exercises. Strengthen your arms and achieve toned triceps with this routine.
    </p>

    <div className="content-section">
      {/* Workout Routine */}
      <div className="workout-routine">
        <h2>Workout Routine</h2>
        <ul>
          <li>Tricep Dips - 3 sets of 12 reps</li>
          <li>Close-Grip Push-ups - 3 sets of 15 reps</li>
          <li>Overhead Tricep Extensions - 3 sets of 12 reps</li>
          <li>Tricep Kickbacks - 3 sets of 12 reps per arm</li>
          <li>Diamond Push-ups - 3 sets of 10 reps</li>
          <li>Skull Crushers - 3 sets of 10 reps</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="workout-benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Targets and strengthens the triceps</li>
          <li>Improves arm strength and endurance</li>
          <li>Helps with overall upper body toning</li>
          <li>Can be done with minimal equipment</li>
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
          src="https://www.youtube.com/embed/NxoXwc-UqKY?si=PLn_QnhntGrGMU8k"
          title="Tricep Workout Routine"
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

export default TricepWorkout