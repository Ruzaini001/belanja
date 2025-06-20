import { useState, useContext } from "react";
import ProductContext from "../context/ProductContext";
import styles from "./MerchantBillForm.module.css";

function MerchantBillForm() {
  const ctx = useContext(ProductContext);
  const [showForm, setShowForm] = useState(false); // Controls input visibility
  const [billName, setBillName] = useState("");
  const [payment, setPayment] = useState("");
  const [mode, setMode] = useState("split");

  const toggleForm = () => {
    setShowForm((prevState) => !prevState); // Toggle visibility
    };

  const handleSubmitBill = () => {
    if (!billName || !payment) {
      alert("Enter valid bill details!");
      return;
    }

    ctx.handlerAddMerchantBill({ name: billName, payment, mode });
    // alert("Bill added successfully!");
    setBillName("");
    setPayment("");
  };

  return (
    <div className={styles.billFormContainer}>
      

      {showForm && (
        <div className={styles.billForm}>
          <input
            type="text"
            placeholder="Bill Name"
            value={billName}
            onChange={(e) => setBillName(e.target.value)}
        />
          <input
            type="number"
            placeholder="Amount"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          />
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="split">Split</option>
            <option value="belanja">Belanja</option>
          </select>

          <button onClick={handleSubmitBill}>Add Bill</button>
        </div>
      )}
      <button onClick={toggleForm} className={styles.showFormButton}>
        {showForm ? "Close" : "Add Bill"}
      </button>
    </div>
  );
}

export default MerchantBillForm;