import "./App.css";

import Header from "./components/Header";
import WeekBoard from "./components/WeekBoard";
import RecipeSection from "./components/RecipeSection";
import ShoppingList from "./components/ShoppingList";

import { emptyPlan, countPlanned } from "./utils/plan";
import { buildShoppingList } from "./utils/shopping";

function App() {
  // A1: o plano vira estado e o toggleRecipe ganha corpo
  const plan = emptyPlan;

  function toggleRecipe() {}

  const items = buildShoppingList(plan);

  return (
    <>
      <Header plannedCount={countPlanned(plan)} />

      <main className="layout">
        <WeekBoard plan={plan} />

        <RecipeSection plan={plan} onToggleRecipe={toggleRecipe} />

        <ShoppingList items={items} />
      </main>
    </>
  );
}

export default App;
