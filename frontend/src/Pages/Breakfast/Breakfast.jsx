import React from 'react'

function Breakfast() {
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

    
    <div className="protein-shake-container">
      <h1 className="title">Sundried Tomato & Herb Scrambled Egg Grilled Cheese Recipe</h1>
      
      <div className="image-container">
        <img 
          src="/n5.jpg"
          alt="Amoretti Easy Banana Nut Protein Shake" 
          className="shake-image"
        />
      </div>
      
      <p className="description">
        Looking for a delicious way to get in some calories, with a decent protein & carb ratio? 
        Try this easy banana nut protein shake on for size!
      </p>

      <div className="content-section">
        {/* Ingredients */}
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>8–12oz Unsweetened Soy or Cashew Milk</li>
            <li>1 cup Ice</li>
            <li>1 scoop Vega Vegan Protein Powder (or protein of choice)</li>
            <li>1 Ripe Banana</li>
            <li>1 pump Amoretti Sugar-Free Amaretto Syrup</li>
            <li>1 handful Roasted, Unsalted Cashews</li>
          </ul>
        </div>

        {/* Nutrition Facts */}
        <div className="nutrition-facts">
          <h2>Nutrition Facts</h2>
          <p>Number of Servings: 1</p>
          <p>Calories: 321</p>
          <p>Amount Per Serving</p>
          <p>Protein: 34g</p>
          <p>Carbs: 31g</p>
          <p>Fat: 12g</p>        
          <p className="disclaimer">*Nutrition facts may vary based on protein powder and milk choice used.</p>
        </div>
      </div>

      <div className="cooking-instructions">
        <h2>Cooking Instructions</h2>
        <div className="video-container">
          <iframe
           src="https://www.youtube.com/embed/K3q93fifB5I?si=l2Ifu1xPoYuHA9_8" 
            title="How to Make a Vegan Protein Shake | Dairy Free Shake Recipe"
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

export default Breakfast

