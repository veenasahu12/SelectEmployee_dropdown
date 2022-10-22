import React, { useState } from "react";
import {data}  from "../db";
import "./Employee.css";

const Employee = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const [data1, setData] = useState(data);
  const [allSelect, setAllSelect] = useState(false);

  const selectAll = (event) => {
    let data2 = [...data1];
    data2.map((item) => {
      return (item.isChecked = event);
    });
    setData(data2);
    setAllSelect(event);
    console.log(data2);
  };

  const handleChange = (event) => {
    const { value, checked } = event.target;
    const arrCopy = [...data1];
    let checkAll = true;
    arrCopy.map((item) => {
      if (item.id.toString() === value.toString()) {
        item.isChecked = checked;
      }
      if (!item.isChecked) checkAll = false;
      return item;
    });
    setData(arrCopy);
    setAllSelect(checkAll);
  };
  return (
    <div className="main_div">
      <h2>Select Employee Dropdown</h2>
      <div className="filter">
        <h4 onClick={() => setShowFilter(!showFilter)}>Select Employee [{data1.length}]</h4>
        {showFilter && (
          <ul className="checkall">
            <input
              type="text"
              placeholder="Search Employee..."
              className="searchbox"
            />
            <li>
              <label className="employee_div">
                <span className="all_username_div">All Employee </span>
                <input
                  type="checkbox"
                  className="checkbox_div"
                  checked={allSelect}
                  onChange={(event) => selectAll(event.target.checked)}
                />
              </label>
            </li>
            {data1?.map((e) => {
              return (
                <div key={e?.id}>
                  <li>
                    <label className="employee_div">
                      <img className="user_img" src={e?.img} alt="user"/>
                      <span className="username_div">{e?.name}</span>
                      <input
                        type="checkbox"
                        className="checkbox_div"
                        checked={e?.isChecked}
                        value={e?.id}
                        onChange={(event) => handleChange(event)}
                      />
                    </label>
                  </li>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Employee;
