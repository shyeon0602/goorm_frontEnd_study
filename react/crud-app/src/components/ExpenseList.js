import React from "react";
import "../styles/ExpenseList.css";
// import { MdDelete } from "react-icons/md";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({
  handleDelete,
  expenses,
  handleEdit,
  clearItems,
}) {
  return (
    <div>
      <ul className="list">
        {/* Expense Item */}
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              expense={expense}
              key={expense.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          목록 지우기
          {/* <MdDelete className="btn-icon" /> */}
        </button>
      )}
    </div>
  );
}
