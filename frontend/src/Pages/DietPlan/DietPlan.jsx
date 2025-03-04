import React from 'react';
import './DietPlan.css';
import { Link } from 'react-router-dom';

function DietPlan() {
  return (
    <>
      <section className="content2">
        <div className="contentx">
          <h1>Diet Plans</h1>
          <p>
            Learn about different approaches to fitness nutrition so you can choose the
            best diet plan to suit your goals.
          </p>
        </div>
      </section>

      {/* Existing Healthy Recipes Section */}
      <section className="recipes">
        <h2>Healthy Recipes</h2>
        <p>Learn how to prepare meals that taste great and support your fitness goals.</p>
        <div className="recipe-grid">
          <Link to="/DietPlan/ProteinShakes" className="recipe-item">
            <img src="src/assets/a1.jpg" alt="Protein Shakes" />
            <span>Protein Shakes</span>
          </Link>

          <Link to="/DietPlan/Proteinbars" className="recipe-item">
            <img src="src/assets/a2.jpg" alt="Protein Bars" />
            <span>Protein Bars</span>
          </Link>

          <Link to="/DietPlan/Highprotein" className="recipe-item">
            <img src="src/assets/a3.jpg" alt="High Protein" />
            <span>High Protein</span>
          </Link>

          <Link to="/DietPlan/Lowcarb" className="recipe-item">
            <img src="src/assets/a4.jpg" alt="Low Carb" />
            <span>Low Carb</span>
          </Link>

          <Link to="/DietPlan/Snacks" className="recipe-item">
            <img src="src/assets/a5.jpg" alt="Snacks" />
            <span>Snacks</span>
          </Link>

          <Link to="/DietPlan/Vegetarian" className="recipe-item">
            <img src="src/assets/a6.jpg" alt="Vegetarian" />
            <span>Vegetarian</span>
          </Link>

          <Link to="/DietPlan/Breakfast" className="recipe-item">
            <img src="src/assets/a7.jpg" alt="Breakfast" />
            <span>Breakfast</span>
          </Link>

          <Link to="/DietPlan/Lunch" className="recipe-item">
            <img src="src/assets/a8.jpg" alt="Lunch" />
            <span>Lunch</span>
          </Link>
        </div>
      </section>




      {/* Meal Plans Section */}
<div className="meal-plans-section">
  <h2>Healthy Meal Plans</h2>
  <div className="meal-plans-list">
    {/* Meal 1 */}
    <div className="meal-card">
      <img src="src/assets/meal1.jpg" alt="High Protein Meal" className="meal-image" />
      <h3>High Protein Meal</h3>
      <p>A perfect meal plan rich in proteins, designed for muscle building and recovery.</p>
    </div>
    {/* Meal 2 */}
    <div className="meal-card">
      <img src="src/assets/meal2.jpg" alt="Low Carb Meal" className="meal-image" />
      <h3>Low Carb Meal</h3>
      <p>Balanced meals with reduced carbs, perfect for weight loss and maintaining energy levels.</p>
    </div>
    {/* Meal 3 */}
    <div className="meal-card">
      <img src="src/assets/meal3.jpg" alt="Vegan Meal Plan" className="meal-image" />
      <h3>Vegan Meal Plan</h3>
      <p>Delicious plant-based meals full of essential nutrients and proteins.</p>
    </div>
    {/* Meal 4 */}
    <div className="meal-card">
      <img src="src/assets/meal4.jpg" alt="Keto Diet Meal" className="meal-image" />
      <h3>Keto Diet Meal</h3>
      <p>Low-carb, high-fat meals designed to keep you in ketosis for maximum fat burning.</p>
    </div>
    {/* Meal 5 */}
    <div className="meal-card">
      <img src="src/assets/meal5.jpg" alt="Balanced Diet" className="meal-image" />
      <h3>Balanced Diet</h3>
      <p>A well-balanced diet with the right mix of protein, carbs, and fats for overall health.</p>
    </div>
    {/* Meal 6 */}
    <div className="meal-card">
      <img src="src/assets/meal6.jpg" alt="Mediterranean Diet" className="meal-image" />
      <h3>Mediterranean Diet</h3>
      <p>A heart-healthy meal plan inspired by Mediterranean cuisine, rich in healthy fats.</p>
    </div>
  </div>
</div>




     





      


      

      

       


    </>
  );
}

export default DietPlan;
