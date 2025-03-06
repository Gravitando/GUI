import React from 'react'

function ChestWorkout() {
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
    <h1 className="title">Chest Workout Routine</h1>

    <div className="image-container">
      <img 
        src="/BeginnerWorkout.jpg"
        alt="Chest Workout"
        className="workout-image"
      />
    </div>

    <p className="description">
      Focus on strengthening your chest with this effective workout. No equipment? No problem! 
      Follow this routine to develop a strong and defined chest.
    </p>

    <div className="content-section">
      {/* Workout Routine */}
      <div className="workout-routine">
        <h2>Workout Routine</h2>
        <ul>
          <li>Push-ups - 3 sets of 15 reps</li>
          <li>Chest Dips - 3 sets of 12 reps</li>
          <li>Incline Push-ups - 3 sets of 15 reps</li>
          <li>Wide Push-ups - 3 sets of 12 reps</li>
          <li>Diamond Push-ups - 3 sets of 12 reps</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="workout-benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Targets and strengthens the chest muscles</li>
          <li>Improves upper body strength</li>
          <li>Enhances muscle definition</li>
          <li>Can be performed with or without equipment</li>
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
          src="https://www.youtube.com/embed/n69-eVLtevc?si=k5YjQB7YydsPsKZC"
          title="Chest Workout Routine"
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

export default ChestWorkout