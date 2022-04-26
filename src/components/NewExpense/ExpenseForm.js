import React, { useState } from "react";
import "./ExpenseForm.css";
import ExpenseFormAddItem from "./ExpenseFormAddItem";

const ExpenseForm = (props) => {
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleState = () => setShowAddForm(!showAddForm);

  return showAddForm == true ? (
    <ExpenseFormAddItem
      onCancelClick={toggleState}
      onSaveExpenseData={props.onSaveExpenseData}
    />
  ) : (
    <button onClick={toggleState} className="new-expense__cancel">
      Add New Expense
    </button>
  );
};

export default ExpenseForm;
