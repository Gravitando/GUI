import React from 'react'
import './Cardio.css';

function Cardio() {
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



    <div className="cardio-workout-container">
  <h1 className="title">Cardio Workout Routine</h1>

  <div className="image-container">
    <img 
      src="/calisthenics.jpg"
      alt="Cardio Workout" 
      className="workout-image"
    />
  </div>

  <p className="description">
    Boost your endurance and burn calories with this intense yet beginner-friendly cardio workout. 
    No gym? No worries! Perform these exercises anywhere to improve heart health and stamina.
  </p>

  <div className="content-section">
    {/* Cardio Routine */}
    <div className="workout-routine">
      <h2>Workout Routine</h2>
      <ul>
        <li>Jump Rope - 3 sets of 1 minute</li>
        <li>Burpees - 3 sets of 12 reps</li>
        <li>High Knees - 3 sets of 30 seconds</li>
        <li>Jump Squats - 3 sets of 10 reps</li>
        <li>Mountain Climbers - 3 sets of 30 seconds</li>
        <li>Jumping Jacks - 3 sets of 45 seconds</li>
      </ul>
    </div>

    {/* Benefits Section */}
    <div className="workout-benefits">
      <h2>Benefits</h2>
      <ul>
        <li>Improves cardiovascular health</li>
        <li>Burns calories and supports weight loss</li>
        <li>Enhances stamina and endurance</li>
        <li>Can be done anywhere, no equipment required!</li>
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
        src="https://www.youtube.com/embed/aTOq9lV44y0?si=l2u5pAix3p3BSg71"
        title="Cardio Workout Routine"
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

export default Cardio