type Food = {
    name: string;
    quantity: number;
}

const foods: Food[] = [
    { name: "Carrot", quantity: 1 },
    { name: "Potato", quantity: 2 }
]

export function App() {

    function renderFoods() {
        return foods.map(food => <li>{food.name}</li>)
    }

    return (
        <>
            <h1>Pantry Manager</h1>
            <ul>
                {renderFoods()}
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




