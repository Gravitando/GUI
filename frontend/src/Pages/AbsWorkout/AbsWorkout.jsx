import React from 'react'

function AbsWorkout() {
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
      <h1 className="title">Abs Workout Routine</h1>
  
      <div className="image-container">
        <img 
          src="/BeginnerWorkout.jpg"
          alt="Abs Workout"
          className="workout-image"
        />
      </div>
  
      <p className="description">
        Strengthen your core and sculpt your abs with this targeted workout. No equipment needed — just follow the simple exercises to get the best results.
      </p>
  
      <div className="content-section">
        {/* Workout Routine */}
        <div className="workout-routine">
          <h2>Workout Routine</h2>
          <ul>
            <li>Crunches - 3 sets of 20 reps</li>
            <li>Leg Raises - 3 sets of 15 reps</li>
            <li>Plank - 3 sets of 45 seconds</li>
            <li>Russian Twists - 3 sets of 30 reps (15 per side)</li>
            <li>Mountain Climbers - 3 sets of 30 seconds</li>
          </ul>
        </div>
  
        {/* Benefits Section */}
        <div className="workout-benefits">
          <h2>Benefits</h2>
          <ul>
            <li>Strengthens core muscles</li>
            <li>Improves posture and stability</li>
            <li>Enhances flexibility and endurance</li>
            <li>Great for toning abs and reducing belly fat</li>
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
            src="https://www.youtube.com/embed/9p7-YC91Q74?si=ygrbgrZp-pe3WUFg"
            title="Abs Workout Routine"
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

export default AbsWorkout