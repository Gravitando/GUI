import React from 'react'

function Proteinbars() {
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
      <h1 className="title">Home Made Protein and Carbohydrate Bar Recipe</h1>
      
      <div className="image-container">
        <img 
          src="\q2.jpg"
          alt="Amoretti Easy Banana Nut Protein Shake" 
          className="shake-image"
        />
      </div>
      
      <p className="description">
      Ever wanted to make your own healthy
       protein bars? Well here is a recipe for home 
       made protein and carbohydrate bars!
      </p>

      <div className="content-section">
        {/* Ingredients */}
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 3/4lb (795g) rolled oats</li>
            <li>3/4lb (340g) dry milk powder</li>
            <li>1 tbsp cinnamon</li>
            <li>1/3pt (237ml) lite syrup</li>
            <li>2 scoops protein powder (flavor to suit)</li>
            <li>2 egg whites</li>
            <li>3tbsp (59ml) orange juice</li>
            <li> tsp cake flavoring </li>
            <li>1/2lb (227mg) raisins or chopped apple</li>
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
          src="https://www.youtube.com/embed/rv-Zlf419rk?si=ZQNMNuente9OifjI"
            title="How to Make a Vegan Protein Shake | Dairy Free Shake Recipe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>


    </>
  );
}

export default Proteinbars