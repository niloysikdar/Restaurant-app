import { MutableRefObject, useRef } from "react";
import { useDispatch } from "react-redux";
import { addFoods } from "../features/customerSlice";

interface CustomerCardType {
  value: {
    id: string;
    name: string;
    foods: string[];
  };
}

const CustomerCard = ({ value }: CustomerCardType) => {
  const foodInput = useRef() as MutableRefObject<HTMLInputElement>;
  const dispatch = useDispatch();

  const handleAddFood = () => {
    if (foodInput.current.value) {
      dispatch(
        addFoods({
          id: value.id,
          food: foodInput.current.value,
        })
      );

      foodInput.current.value = "";
    }
  };

  return (
    <div className="customer-food-card-container">
      <p style={{ fontSize: "18px" }}>Name: {value.name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {value.foods.map((food, i) => (
            <p key={i}>{food} ,</p>
          ))}
        </div>

        <div className="customer-food-input-container">
          <input ref={foodInput} />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
