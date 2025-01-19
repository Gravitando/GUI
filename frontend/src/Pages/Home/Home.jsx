import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <>
            <section className="home">
              
            <div className="content">
              <h1>Get Fit. Get Strong.</h1>
              <p>Welcome to Fit Life</p>
              <div className="buttons">
              <Link to="/AboutUs">
              <button className="btn join">Learn More</button>
              </Link>
              </div>

            </div>                            
            </section>         




            <section className="welcome">
             <div className="welcome-content">
                 <h1 className="headline green">Get Fit, Feel Great,</h1>
                 <h1 className="headline blue">And Live Your Healthier Life With</h1>
                 <h1 className="headline blue">Fit Life Regime</h1>
                 <p className="description">
                 Get accurate and up-to-date information on a variety of exercise and fitness topics. We focus 
                 on strength training, cardio, yoga, nutrition, and the latest trends in the fitness world. 
                 Whether you're a beginner looking to build a solid foundation or an experienced athlete aiming 
                 to enhance performance, we provide expert advice, effective workout routines, and nutritional 
                 guidance tailored to your goals. Our content also covers the latest trends in fitness technology, 
                 wellness practices, recovery techniques, and mental health, ensuring a holistic approach to your 
                 fitness journey. Stay informed and motivated with valuable tips 
                 and insights designed to help you achieve lasting results and a balanced lifestyle.
                 </p>

                 <div className="buttons">
                 <Link to="/workout">
                 <button className="btn primary">All Workout</button>
                 </Link>
                </div>
              </div>

      <div className="welcome-video">
        <video src="/Aa.mp4" autoPlay muted loop className="video-element">
          Your browser does not support the video tag.
        </video>
      </div>

    </section>
          





      {/* Services Section */}
  <div className="services-section">
  <h2>Trending in Workouts</h2>
  <div className="services-list">
    {/* Service 1 */}
    <div className="service-card">
      <img src="src/assets/tyu.webp" alt="12 Week Fat Destroyer" className="service-image" />
      <h3>12 Week Fat Destroyer</h3>
      <p>This is a complete 12 week program to help you get ripped. Feature includes detailed diet plan 
        and cardio schedule, along with a 4 day upper/lower muscle building split.</p>
    </div>
    {/* Service 2 */}
    <div className="service-card">
      <img src="src/assets/zxc.webp" alt="Dumbbell Only Workout" className="service-image" />
      <h3>Dumbbell Only Workout</h3>
      <p>This workout program only requires dumbbells, has just the right amount of volume to 
        promote muscle growth, and is perfect to do at home or on the go.</p>
    </div>
    {/* Service 3 */}
    <div className="service-card">
      <img src="src/assets/bnm.webp" alt="10 Week Mass Building Program" className="service-image" />
      <h3>10 Week Mass Building Program</h3>
      <p>This workout is designed to increase your muscle mass as much as possible in 10 weeks. Works each muscle group hard once per week using mostly heavy compound exercises.</p>
    </div>
    {/* Service 4 */}
    <div className="service-card">
      <img src="src/assets/dfg.jpg" alt="6 Day Push/Pull/Legs" className="service-image" />
      <h3>6 Day Push/Pull/Legs</h3>
      <p>This 6 day push/pull/legs workout routine split is a high volume, rest-pause system 
        designed for intermediate lifters looking to gain muscle and strength.</p>
    </div>
    {/* Service 5 */}
    <div className="service-card">
      <img src="src/assets/bnml.webp" alt="4 Day Maximum Mass Workout" className="service-image" />
      <h3>4 Day Maximum Mass Workout</h3>
      <p>A mass building routine that features a great combination of effective compound and isolation 
        movements along with intense, high impact five minute burn sets.</p>
    </div>
    {/* Service 6 */}
    <div className="service-card">
      <img src="src/assets/ert.webp" alt="8 Week Fat Loss Workout" className="service-image" />
      <h3>8 Week Fat Loss Workout</h3>
      <p>This 4-day program is designed to help you burn fat without burning too much time on the clock. You'll 
        also learn the basics of fat loss nutrition and recovery.</p>
    </div>    
  </div>
</div>

<div className="services-section">
  <h2>Most Viewed Exercise Guides</h2>
  <div className="services-list">
    {/* Service 1 */}
    <div className="service-card">
      <img src="src/assets/qa.webp" alt="Dumbbell Lateral Raise" className="service-image" />
      <h3>Dumbbell Lateral Raise</h3>
      <p>Dumbbell lateral raise targets the deltoid muscles, improves shoulder 
        strength, enhances upper body definition, and boosts overall stability.</p>
    </div>
    {/* Service 2 */}
    <div className="service-card">
      <img src="src/assets/ws.webp" alt="Dumbbell Bench Press" className="service-image" />
      <h3>Dumbbell Bench Press</h3>
      <p>"The dumbbell bench press strengthens chest muscles, improves balance, enhances
         range of motion, and supports upper body development effectively."</p>
    </div>
    {/* Service 3 */}
    <div className="service-card">
      <img src="src/assets/ed.webp" alt="Dumbbell Pullover" className="service-image" />
      <h3>Dumbbell Pullover</h3>
      <p>"Dumbbell pullover targets chest and back muscles, enhances flexibility, 
        strengthens the core, and improves overall upper-body muscle coordination."</p>
    </div>
    {/* Service 4 */}
    <div className="service-card">
      <img src="src\assets\rf.jpg" alt="One Arm Dumbbell Row" className="service-image" />
      <h3>One Arm Dumbbell Row</h3>
      <p>One-arm dumbbell row targets back muscles, strengthens the 
        lats, improves posture, enhances core stability, and builds upper body strength</p>
    </div>
    {/* Service 5 */}
    <div className="service-card">
      <img src="src/assets/tg.webp" alt="Bent Over Dumbbell Row" className="service-image" />
      <h3>Bent Over Dumbbell Row</h3>
      <p>"Bent-over dumbbell row strengthens back muscles, improves posture, 
        enhances core stability, boosts upper body strength, and increases endurance."</p>
    </div>
    {/* Service 6 */}
    <div className="service-card">
      <img src="src/assets/yh.webp" alt="8 Week Fat Loss Workout" className="service-image" />
      <h3>Incline Dumbbell Bench Press</h3>
      <p>"Incline dumbbell bench press targets upper chest, builds shoulder strength, 
        improves stability, enhances muscle symmetry, and boosts upper body definition."</p>
    </div>
    
  </div>
</div> 
            
        </>
    );
};

export default Home;


