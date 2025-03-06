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
      <img src="src\assets\meal01.jpg" alt="High Protein Meal" className="meal-image" />
      <h3>High Protein Meal</h3>
      <p>This protein-rich meal plan supports muscle building and recovery with balanced nutrients. It includes lean meats, eggs, dairy, 
        legumes, and healthy fats, ensuring optimal muscle growth, repair, and sustained energy levels.</p>
    </div>
    {/* Meal 2 */}
    <div className="meal-card">
      <img src="src\assets\meal02.jpg" alt="Low Carb Meal" className="meal-image" />
      <h3>Low Carb Meal</h3>
      <p>This balanced meal plan features reduced carbs, ideal for weight loss while maintaining energy levels. It includes lean proteins, 
        healthy fats, and fiber-rich vegetables to support metabolism, satiety, and overall well-being.</p>
    </div>
    {/* Meal 3 */}
    <div className="meal-card">
      <img src="src\assets\meal03.jpg" alt="Vegan Meal Plan" className="meal-image" />
      <h3>Vegan Meal Plan</h3>
      <p>These delicious plant-based meals are packed with essential nutrients and proteins, featuring legumes, nuts, seeds, and fresh vegetables. 
        They support muscle growth, energy levels, and overall well-being while being flavorful and satisfying.</p>
    </div>
    {/* Meal 4 */}
    <div className="meal-card">
      <img src="src\assets\meal04.jpg" alt="Keto Diet Meal" className="meal-image" />
      <h3>Keto Diet Meal</h3>
      <p>These low-carb, high-fat meals are designed to keep you in ketosis, maximizing fat burning while sustaining energy levels. They include healthy fats, 
        moderate protein, and nutrient-dense ingredients for optimal metabolic efficiency.</p>
    </div>
    {/* Meal 5 */}
    <div className="meal-card">
      <img src="src/assets/meal05.jpg" alt="Balanced Diet" className="meal-image" />
      <h3>Balanced Diet</h3>
      <p>This well-balanced diet provides the perfect mix of protein, carbs, and fats to support overall health. It includes lean proteins, whole grains, healthy fats,
         and a variety of fruits and vegetables for energy, muscle repair, and optimal bodily function..</p>
    </div>
    {/* Meal 6 */}
    <div className="meal-card">
      <img src="src\assets\meal06.jpg" alt="Mediterranean Diet" className="meal-image" />
      <h3>Mediterranean Diet</h3>
      <p>This heart-healthy meal plan, inspired by Mediterranean cuisine, is rich in healthy fats like olive oil, nuts, and seeds. It includes fresh vegetables, 
        whole grains, and lean proteins, promoting cardiovascular health and overall wellness.</p>
    </div>
  </div>
</div>




     





      


      

      

       


    </>
  );
}

export default DietPlan;
