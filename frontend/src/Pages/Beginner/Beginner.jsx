import React from 'react'
import './Beginner.css';


function Beginner() {
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
  <h1 className="title">Beginner Full-Body Workout Routine</h1>

  <div className="image-container">
    <img 
      src="/BeginnerWorkout.jpg"
      alt="Beginner Workout" 
      className="workout-image"
    />
  </div>

  <p className="description">
    Get started on your fitness journey with this beginner-friendly full-body workout. 
    No equipment? No problem! Follow this simple routine to build strength and endurance.
  </p>

  <div className="content-section">
    {/* Workout Routine */}
    <div className="workout-routine">
      <h2>Workout Routine</h2>
      <ul>
        <li>Jumping Jacks - 3 sets of 30 seconds</li>
        <li>Bodyweight Squats - 3 sets of 12 reps</li>
        <li>Push-ups - 3 sets of 10 reps</li>
        <li>Plank - 3 sets of 30 seconds</li>
        <li>Walking Lunges - 3 sets of 10 reps per leg</li>
        <li>Mountain Climbers - 3 sets of 30 seconds</li>
      </ul>
    </div>

    {/* Benefits Section */}
    <div className="workout-benefits">
  <h2>Benefits</h2>
  <ul>
    <li>Improves overall body strength</li>
    <li>Enhances endurance and flexibility</li>
    <li>Great for fat loss and muscle toning</li>
    <li>Can be done anywhere, no equipment needed!</li>
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
        src="https://www.youtube.com/embed/EKUNGQ4LmH8?si=2mUqfyMdX35QX7FM"
        title="Beginner Full-Body Workout Routine"
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

export default Beginner