import React from 'react'
import './AboutUs.css';

function AboutUs() {
  return (

    <>
    <section className="content1">
          <video autoPlay muted loop className="background-video">
              <source src="public/zz.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <div className="overlay-content">
              <h1>About Fit Life</h1>
              <p>
              We offer free workouts, tools, 
              and expert advice to help you achieve your
               fitness goals and improve your health.
              </p>
          </div>
      </section> 




   <div className="container">
      <div className="workout-section">
        <div className="text-content">
          <h2>FREE WORKOUT PLANS</h2>
          <p>
          We offer an extensive database of free workouts, meticulously
           designed by fitness experts to cater to every goal and experience level. 
           Whether you're looking to build strength, improve endurance, lose weight, or 
           increase flexibility, our library has something for everyone. Download your favorite 
           workouts directly to your phone, so you can easily access them anytime, anywhere, and 
           follow along with step-by-step instructions while you're in the gym. No more searching for
           workouts—just open your phone and get started on your fitness journey!
          </p>
          
        </div>
        <img src="src/assets/qz.jpg" alt="Workout Plan" />
      </div>

      <div className="workout-section reverse-layout">
      <div className="text-content">
        <h2>EXERCISE VIDEO LIBRARY</h2>
        <p>
        Our comprehensive videos and step-by-step instructions guide you through 
        each exercise, ensuring that you use the correct technique to maximize 
        effectiveness and avoid injury. We break down each movement, providing 
        expert tips and modifications for different fitness levels. Whether you're a 
        beginner or an advanced athlete, our resources help you perform exercises with 
        proper form, helping you achieve your goals faster and with greater results. Get personalized feedback 
        and learn how to track your progress with our easy-to-follow workouts.
        </p>
      </div>
       <img src="src/assets/wx.jpg" alt="Exercise Library" />
     </div>

     <div className="workout-section">
        <div className="text-content">
          <h2>Articles & Expert Guides</h2>
          <p>
          "Find articles, videos, and expert guides designed to teach you
           how to reach your fitness and physique goals with effective workouts, 
           nutrition tips, and proven strategies. Explore step-by-step plans, motivational 
           content, and practical advice tailored to beginners and advanced enthusiasts alike, 
          ensuring you stay on track and achieve lasting results."
          </p>
          
        </div>
        <img src="src\assets\tb.jpg" alt="Workout Plan" />
      </div>

      <div className="workout-section reverse-layout">
      <div className="text-content">
        <h2>Nutrition Guides</h2>
        <p>
        "We understand the importance of nutrition. Learn how to create your own personalized diet plan 
        tailored to your fitness goals, whether it's weight loss, muscle gain, or simply maintaining a 
        healthy lifestyle. Discover how to prepare delicious, nutrient-packed meals that fuel your body, 
        enhance your performance, and keep you energized throughout the day. From easy-to-follow recipes to 
        tips on portion control and meal prep strategies, 
        we provide everything you need to build sustainable eating habits and reach your health objectives."
        </p>
      </div>
       <img src="src\assets\rv.jpg" alt="Exercise Library" />
     </div>

    </div>

       
    
    
    
    
   
    </>
    

  )
}

export default AboutUs


