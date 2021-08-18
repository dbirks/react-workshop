import { useState } from "react";
import { useEffect } from "react";
import { deleteFood, getFoods } from "./api/foodsApi";
import { Input } from "./shared/Input";
import { Select } from "./shared/Select";

export type Food = {
  id: number;
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

export function App() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function callGetFoods() {
      // Using underscore to prevent naming conflict
      const _foods = await getFoods();
      setFoods(_foods);
    }
    callGetFoods();
    // Using empty array for useEffect since we only want it to run once
  }, []);

  return (
    <>
      <h1>Pantry Manager</h1>

      {/* Exercise 1: Create a reusable Select and consume it below for Food Type
        1. Vegetable
        2. Grain
        3. Fruit
      */}

      <form>
        <Input id="name" label="Name" />
        <Input id="quantity" label="Quantity" />
        <Input id="min-quantity" label="Min Quantity" />
        <Select
          id="type"
          label="type"
          placeholderOption="Select type"
          options={[
            { label: "Vegetable", value: "Vegetable" },
            { label: "Grain", value: "Grain" },
            { label: "Fruit", value: "Fruit" },
          ]}
        />
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Min Quantity</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {/* Exercise 3: Add a delete button next to the name. When clicked, alert('clicked').} */}
          {foods.map((food) => (
            <tr key={food.name}>
              <td>
                <button
                  onClick={async () => {
                    await deleteFood(food.id);
                    // Return a new array with the id that was just deleted
                    const newFoods = foods.filter((f) => f.id !== food.id);
                    // remove the deleted food from state
                    setFoods(newFoods);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>{food.name}</td>
              <td>{food.quantity}</td>
              <td>{food.minQuantity}</td>
              <td>{food.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// // Function declaration
// // Preferred, to be able to see at a glance that it's a function.
// // Function declarations are also hoisted to the top of the file.
// export function App() {
//     return <h1>Pantry Manager</h1>
// }
//
// // Function expression
// const App2 = function () {
//     return <h1>Pantry Manager</h1>
// }
//
// // Arrow function
// const App3 = () => <h1>Pantry Manager</h1>
