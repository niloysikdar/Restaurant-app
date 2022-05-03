import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CustomerCard from "./CustomerCard";

const AllCustomers = () => {
  const customers = useSelector((state: RootState) => state.customers.value);

  return (
    <div>
      {customers.map((value, i) => (
        <CustomerCard key={i} value={value} />
      ))}
    </div>
  );
};

export default AllCustomers;
