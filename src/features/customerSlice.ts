import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  foods: string[];
}

interface CustomerState {
  value: Customer[];
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoods: (state, action: PayloadAction<{ id: string; food: string }>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.foods.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoods } = customerSlice.actions;
export default customerSlice.reducer;
