type Food = {
    name: string;
    quantity: number;
}

const foods: Food[] = [
    { name: "Carrot", quantity: 1 },
    { name: "Potato", quantity: 2 }
]

export function App() {
    return (
        <>
            <h1>Pantry Manager</h1>
            <ul>
                {/* Exercise 1: DIsplay quantity next to food with a dash in between */}
                {foods.map((food) => (
                    <li>
                        {food.name} - {food.quantity}
                    </li>
                ))}
            </ul>
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




