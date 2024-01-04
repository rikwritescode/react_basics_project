import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage
          recipe={selectedRecipe}
          goBack={() => setSelectedRecipe(null)}
        />
      ) : (
        <RecipeListPage setSelectedRecipe={setSelectedRecipe} />
      )}
    </div>
  );
};
