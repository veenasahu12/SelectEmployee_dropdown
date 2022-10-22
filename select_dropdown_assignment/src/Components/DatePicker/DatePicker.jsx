import React, { useState } from "react";
import "./DatePicker.css";

const DatePicker = () => {
  const [startDate, setStartDate] = useState();

  return (
    <div className="maindiv">
      <h2>Date Picker</h2>
      <h3>Selected Date : {startDate}</h3>
      <input
        type="date"
        className="selectdate_div"
        onChange={(e) => setStartDate(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
