import React from "react";
// import { MdDelete, MdEdit } from "react-icons/md";
import "../styles/ExpenseItem.css";

export default function ExpenseItem({ expense, handleDelete, handleEdit }) {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expense.charge}</span>
        <span className="amount">{expense.amount}</span>
      </div>
      <div>
        <button className="edit-btn" onClick={() => handleEdit(expense.id)}>
          수정
          {/* <MdEdit /> */}
        </button>
        <button className="clear-btn" onClick={() => handleDelete(expense.id)}>
          삭제
          {/* <MdDelete /> */}
        </button>
      </div>
    </li>
  );
}
