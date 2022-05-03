import { useRef, MutableRefObject } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { addReservation } from "./features/reservationSlice";

import ReservationCard from "./components/ReservationCard";
import AllCustomers from "./components/AllCustomers";
import "./App.css";

function App() {
  const reservationNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const dispatch = useDispatch();

  const allReservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const handleAddReservation = () => {
    if (reservationNameRef.current.value) {
      dispatch(addReservation(reservationNameRef.current.value));
      reservationNameRef.current.value = "";
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {allReservations.map((val, i) => (
                <ReservationCard key={i} name={val} index={i} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input ref={reservationNameRef} type="text" />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <AllCustomers />
        </div>
      </div>
    </div>
  );
}

export default App;
