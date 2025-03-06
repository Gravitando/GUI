import React from 'react'

function ShoulderWorkout() {
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
    <h1 className="title">Shoulder Workout Routine</h1>

    <div className="image-container">
      <img 
        src="/BeginnerWorkout.jpg"
        alt="Shoulder Workout"
        className="workout-image"
      />
    </div>

    <p className="description">
      Strengthen and sculpt your shoulders with this effective shoulder workout routine. This routine focuses on building strong, defined delts.
    </p>

    <div className="content-section">
      {/* Workout Routine */}
      <div className="workout-routine">
        <h2>Workout Routine</h2>
        <ul>
          <li>Overhead Dumbbell Press - 3 sets of 12 reps</li>
          <li>Lateral Raises - 3 sets of 15 reps</li>
          <li>Front Raises - 3 sets of 12 reps</li>
          <li>Arnold Press - 3 sets of 10 reps</li>
          <li>Face Pulls - 3 sets of 15 reps</li>
          <li>Reverse Pec Deck - 3 sets of 12 reps</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="workout-benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Strengthens shoulder muscles</li>
          <li>Improves shoulder mobility</li>
          <li>Enhances upper body strength</li>
          <li>Helps with posture and injury prevention</li>
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
          src="https://www.youtube.com/embed/21lYP86dHW4?si=Lmb_r5TXPxhFHTNw"
          title="Shoulder Workout Routine"
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

export default ShoulderWorkout