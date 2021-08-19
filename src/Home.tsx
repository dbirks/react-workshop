import { useState } from "react";
import { useEffect } from "react";
import { deleteFood, getFoods } from "./api/foodsApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

export type Food = {
  id: number;
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

export function Home() {
  const { data: foods } = useQuery("foods", getFoods);

  if (!foods) {
    return null;
  }

  return (
    <>
      <ToastContainer />

      <h1>Pantry Manager</h1>

      <Link className="btn btn-secondary" to="/food">
        Add Food
      </Link>

      {foods.length ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Min Quantity</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food.name}>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={async () => {
                      await deleteFood(food.id);
                      // Return a new array with the id that was just deleted
                      const newFoods = foods.filter((f) => f.id !== food.id);
                      // remove the deleted food from state
                      // setFoods(newFoods);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/food/${food.id}`}>{food.name}</Link>
                </td>
                {/* Ex 5: Style quantity in bold red when it is higher than the quantity */}
                <td
                  style={
                    food.quantity < food.minQuantity
                      ? { color: "red", fontWeight: "bold" }
                      : {}
                  }
                >
                  {food.quantity}
                </td>
                <td>{food.minQuantity}</td>
                <td>{food.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p> Uh oh, no foods :( </p>
      )}
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
