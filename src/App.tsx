import { useState } from "react";
import { useEffect } from "react";
import { getFoods } from "./api/foodsApi";

type Food = {
    name: string;
    quantity: number;
    minQuantity: number;
    type: string;
}

// Exercise 2:
// 1. Add 2 properties: reorderPoint (number), type (string)
// 2. Display all this in a table.
// const foods: Food[] = [
//     { name: "Carrot", quantity: 4, minQuantity: 2, type: "vegetable" },
//     { name: "Potato", quantity: 5, minQuantity: 4, type: "vegetable" }
// ]

export function App() {
    const [foods, setFoods] = useState<Food[]>([]);

    useEffect(() => {
        async function callGetFoods() {
            const response = await getFoods();
            if (!response.ok) throw new Error("Call to get foods failed");
            const json: Food[] = await response.json();
            setFoods(json);
        }
        callGetFoods();
        // Using empty array for useEffect since we only want it to run once
    }, [])

    return (
        <>
            <h1>Pantry Manager</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            Min Quantity
                        </th>
                        <th>
                            Type
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((food) => (
                        <tr key={food.name}>
                            <td>{food.name}</td>
                            <td>{food.quantity}</td>
                            <td>{food.minQuantity}</td>
                            <td>{food.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
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




