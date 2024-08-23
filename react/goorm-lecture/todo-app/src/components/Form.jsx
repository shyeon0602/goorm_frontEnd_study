import React from "react";

export default function Form({ value, setValue, handleSubmit }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      {/* Form */}
      <form action="" className="flex p-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="value"
          className="w-full px-3 py-2 text-gray-500 border rounded shadow"
          placeholder="해야 할 일을 입력하세요"
          value={value}
          onChange={handleChange}
        />
        <input type="submit" value="입력" className="btn" />
      </form>
    </div>
  );
}
