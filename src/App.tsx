type Food = {
    name: string;
    quantity: number;
    minQuantity: number;
    type: string;
}

// Exercise 2:
// 1. Add 2 properties: reorderPoint (number), type (string)
// 2. Display all this in a table.
const foods: Food[] = [
    { name: "Carrot", quantity: 4, minQuantity: 2, type: "vegetable" },
    { name: "Potato", quantity: 5, minQuantity: 4, type: "vegetable" }
]

export function App() {
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
                        <tr>
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




