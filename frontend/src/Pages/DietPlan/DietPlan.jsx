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


     





      


      

      

       


    </>
  );
}

export default DietPlan;
