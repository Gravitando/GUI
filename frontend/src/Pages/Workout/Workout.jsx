import React, {useState, useEffect} from 'react'
import './Workout.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { FaTrash } from "react-icons/fa";


function Workout() {
  const [workoutPlan, setWorkoutPlan] = useState({workoutType:"strength", date:"", startTime:"", duration:0});
  const [workouts, setWorkouts] = useState([]);

  const handleWorkoutPlanChange = (e) => {
    const plan = {...workoutPlan}
    plan[e.currentTarget.name] = isNaN(e.currentTarget.value) ? e.currentTarget.value: Number(e.currentTarget.value);
    setWorkoutPlan(plan);

  }

  const fetchWorkouts = async () => {
    const res = await axios.get("http://localhost:3001/workouts");
    setWorkouts(res.data);
  }

  useEffect(() => {
    fetchWorkouts()
  },[])
  

  const onWorkoutSubmit = async () => {
    const res = await axios.post("http://localhost:3001/workouts", workoutPlan)
    if (res.status === 201) {
      fetchWorkouts();
    } else {
      alert("Failed to create Workout Plan");
    }
  }
  const onWorkoutDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3001/workouts/${id}`);
    if (res.status === 200) {
      fetchWorkouts();
    } else {
      alert("Failed to delete Workout Plan");
  }
}

  return (

      <><section className="content1">
          <video autoPlay muted loop className="background-video">
              <source src="public/fg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <div className="overlay-content">
              <h1>Workout Plans</h1>
              <p>
                  The most comprehensive database of free workout routines anywhere! 
              </p>
          </div>
      </section> 

   
 <section className="workouts">
       <h2>Workout Categories</h2>
       <p>Choose a category that best suits the workout you're searching for<br /> Once in the category, 
        use the sort and filter options to find the right workout for your experience and goals.</p>
 <div className="workout-grid">
    <Link to="/Workout/StrengthTraining" className="workout-item">
      <img src="public\Bigginer.webp" alt="Strength Training" />
      <span>Beginner</span>
    </Link>

    <Link to="/Workout/Cardio" className="workout-item">
      <img src="public\cardio.webp" alt="Cardio" />
      <span>Cardio</span>
    </Link>

    <Link to="/Workout/Yoga" className="workout-item">
      <img src="public\fatloss.jpg" alt="Yoga" />
      <span>Fat Loss</span>
    </Link>

    <Link to="/Workout/HIIT" className="workout-item">
      <img src="public\increasestrength.jpg" alt="HIIT" />
      <span>Increase Strength</span>
    </Link>

    <Link to="/Workout/Flexibility" className="workout-item">
      <img src="public/abworkouts.jpg" alt="Flexibility" />
      <span>Abs Workouts</span>
    </Link>

    <Link to="/Workout/Endurance" className="workout-item">
      <img src="public/chestworkouts.jpg" alt="Endurance" />
      <span>Chest Workouts</span>
    </Link>

    <Link to="/Workout/Core" className="workout-item">
      <img src="public/backworkouts.jpg" alt="Core Workouts" />
      <span>Back Workouts</span>
    </Link>

    <Link to="/Workout/FullBody" className="workout-item">
      <img src="public\bicepworkouts.jpg" alt="Full Body" />
      <span>Bicep Workouts</span>
    </Link>

    <Link to="/Workout/Shoulder" className="workout-item">
      <img src="public\shoulderworkout.webp" alt="Shoulder" />
      <span>Shoulder Workouts</span>
    </Link>

    <Link to="/Workout/leg" className="workout-item">
      <img src="public\legworkouts.webp" alt="leg" />
      <span>Leg Workouts</span>
    </Link>

    <Link to="/Workout/Tricep" className="workout-item">
      <img src="public/backworkouts.jpg" alt="Tricep" />
      <span>Tricep Workouts</span>
    </Link>

    <Link to="/Workout/Glute" className="workout-item">
      <img src="public\gluteworkouts.jpg" alt="Glute" />
      <span>Glute Workouts</span>
    </Link>
  </div>
 </section>

      
{/* Workout Trends Section */}
<div className="workout-trends-section">
  <h2>Trending Workout Programs</h2>
  <div className="workout-trends-list">
    {/* Workout 1 */}
    <div className="workout-card">
      <img src="src/assets/strength.webp" alt="Strength & Conditioning Plan" className="workout-image" />
      <h3>Strength & Conditioning Plan</h3>
      <p>A 12-week plan focused on improving full-body strength and endurance with progressive overload techniques.</p>
    </div>
    {/* Workout 2 */}
    <div className="workout-card">
      <img src="src/assets/cardio.webp" alt="High-Intensity Cardio Routine" className="workout-image" />
      <h3>High-Intensity Cardio Routine</h3>
      <p>This 6-week routine combines sprint intervals and plyometric exercises for maximum fat burn and stamina boost.</p>
    </div>
    {/* Workout 3 */}
    <div className="workout-card">
      <img src="src/assets/yoga.webp" alt="Yoga for Mobility & Recovery" className="workout-image" />
      <h3>Yoga for Mobility & Recovery</h3>
      <p>Enhance flexibility and reduce muscle stiffness with this structured 8-week yoga program designed for athletes.</p>
    </div>
    {/* Workout 4 */}
    <div className="workout-card">
      <img src="src/assets/bodyweight.webp" alt="Bodyweight Strength Program" className="workout-image" />
      <h3>Bodyweight Strength Program</h3>
      <p>A 4-week calisthenics-based workout plan to build strength and endurance without any gym equipment.</p>
    </div>
    {/* Workout 5 */}
    <div className="workout-card">
      <img src="src/assets/muscle.webp" alt="Muscle Growth Blueprint" className="workout-image" />
      <h3>Muscle Growth Blueprint</h3>
      <p>A hypertrophy-focused 10-week training program to help you gain lean muscle mass with structured progression.</p>
    </div>
    {/* Workout 6 */}
    <div className="workout-card">
      <img src="src/assets/endurance.webp" alt="Endurance Training Guide" className="workout-image" />
      <h3>Endurance Training Guide</h3>
      <p>Improve your stamina with this endurance-based 8-week program designed for runners and athletes.</p>
    </div>
  </div>
</div>




{/* Workout Plan Generator Section */}
<div className="workout-plan-generator">
  <h2>Workout Plan Generator</h2>
  <div className="settings-box">
    

    {/* Workout Type Dropdown */}
    <label htmlFor="workout-type">Workout Type:</label>
    <select id="workout-type" name='workoutType' onChange={handleWorkoutPlanChange}>
      <option value="Abs Workout">Abs Workout</option>
      <option value="Chest Workout">Chest Workout</option>
      <option value="Shoulder Workout">Shoulder Workout</option>
      <option value="Leg Workouts">Leg Workouts</option>
      <option value="Bicep Workout">Bicep Workout</option>
    </select>

    {/* Date Input */}
    <label htmlFor="workout-date">Date:</label>
    <input type="date" id="workout-date" name='date' onChange={handleWorkoutPlanChange}/>

    {/* Time Input */}
    <label htmlFor="workout-time">Time:</label>
    <input type="time" id="workout-time" name='startTime' onChange={handleWorkoutPlanChange}/>

    {/* Duration Input */}
    <label htmlFor="workout-duration">Time Duration (minutes):</label>
    <input type="number" id="workout-duration" placeholder="Enter duration in minutes" name="duration" onChange={handleWorkoutPlanChange}/>
    <button onClick={() => onWorkoutSubmit()}>Add</button>
  </div>
</div>


<div className="workout-table-container">
  <h2>Scheduled Workout Plans</h2>
  <table className="workout-table">
    <thead>
      <tr>
        <th>Workout Type</th>
        <th>Date</th>
        <th>Start Time</th>
        <th>Duration (mins)</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {workouts.map((workout) => (
        <tr key={workout._id}>
          <td>{workout.workoutType}</td>
          <td>{workout.date}</td>
          <td>{workout.startTime}</td>
          <td>{workout.duration}</td>
          <td>
            <button className="delete-btn" onClick={() => onWorkoutDelete(workout._id)}>
              <FaTrash className="trash-icon" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      
      
      





    </>

        
  )
}

export default Workout
