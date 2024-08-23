import { useState } from "react";
import "./App.css";

function App() {
  const [charge, setCharge] = useState("");
  const [id, setId] = useState("");
  const [amount, setAmount] = useState(0);
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({ show: false });
  const [expenses, setExpenses] = useState([{ id: 1, charge: "", amount: 0 }]);

  return <div className="App"></div>;
}

export default App;
