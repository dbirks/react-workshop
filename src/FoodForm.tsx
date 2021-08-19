import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addFood, getFood } from "./api/foodsApi";
import { Input } from "./shared/Input";
import { Select } from "./shared/Select";
import { useHistory, useParams } from "react-router-dom";
import { Food } from "./App";

/*
Exercise 4: Hydrate form
  1. Get the matching food via fetch http://localhost:3001/foods/2
    - Create the func that does the fetch
    - put the call in useEffect
  2. Populate the form
*/

export type NewFood = {
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

const emptyFood: NewFood = {
  name: "",
  quantity: 0,
  minQuantity: 0,
  type: "",
};

export function FoodForm() {
  const [food, setFood] = useState<NewFood>(emptyFood);
  const history = useHistory();
  const { foodId } = useParams() as any;

  useEffect(() => {
    async function fetchFood() {
      // Using underscore to prevent naming conflict
      const _food = await getFood(foodId);
      setFood(_food);
    }
    if (foodId) fetchFood();
  }, [foodId]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Exercise 2: Save the form data.
    // Url: http://localhost:3001/foods
    // Verb: POST
    event.preventDefault();

    try {
      await addFood(food);
      toast.success("Food saved!");
      history.push("/"); // Redirect to home
    } catch (error) {
      toast.error("Failed to add");
    }
  }

  // Implementing single onChange handler by convention
  // id coorellates to the property in state
  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { value, id } = event.target;

    // Create a copy of existing state, but change the name property to the new value
    setFood({
      ...food,
      [id]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{foodId ? "Edit Food" : "Add Food"}</h1>
      <Input onChange={onChange} id="name" label="Name" value={food.name} />
      <Input
        onChange={onChange}
        id="quantity"
        label="Quantity"
        type="number"
        value={food.quantity.toString()}
      />
      <Input
        onChange={onChange}
        id="minQuantity"
        label="Min Quantity"
        type="number"
        value={food.minQuantity.toString()}
      />
      <Select
        onChange={onChange}
        id="type"
        label="type"
        placeholderOption="Select type"
        options={[
          { label: "Vegetable", value: "Vegetable" },
          { label: "Grain", value: "Grain" },
          { label: "Fruit", value: "Fruit" },
        ]}
        value={food.type}
      />
      <input className="btn btn-primary" type="submit" value="Save Food" />
    </form>
  );
}
