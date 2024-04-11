"use client";
import React from "react";
import { useState } from "react";
// import TimePicker from "react-time-picker";
// import "react-time-picker/dist/TimePicker.css";
// import "react-clock/dist/Clock.css";
// import { Button } from "antd";
// import { DateTimePicker } from "@mantine/dates";

// const CustomTimePicker = ({ onChange }) => {
//   const [hour, setHour] = useState();
//   const [minute, setMinute] = useState();

//   const handleHourChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
//     const newHour = parseInt(e.target.value, 10);
//     if (newHour >= 0 && newHour <= 23) {
//       setHour(newHour);
//       onChange(newHour, minute);
//     }
//   };

//   const handleMinuteChange = (e: any) => {
//     const newMinute = parseInt(e.target.value, 10);
//     if (newMinute >= 0 && newMinute <= 59) {
//       setMinute(newMinute);
//       onChange(hour, newMinute);
//     }
//   };

//   return (
//     <div className="flex items-center">
//       <input type="number" value={hour} onChange={handleHourChange} />
//       :
//       <input type="number" value={minute} onChange={handleMinuteChange} />
//     </div>
//   );
// };

type CustomTimePickerProps = {
  onChange: (hour?: number, minute?: number) => void;
};

const CustomTimePicker = ({ onChange }: CustomTimePickerProps) => {
  const [hour, setHour] = useState<number>();
  const [minute, setMinute] = useState<number>();

  const handleHourChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newHour = parseInt(e.target.value, 10);
    if (!isNaN(newHour) && newHour >= 0 && newHour <= 23) {
      setHour(newHour);
      onChange(newHour, minute);
    }
  };

  const handleMinuteChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const newMinute = parseInt(e.target.value, 10);
    if (!isNaN(newMinute) && newMinute >= 0 && newMinute <= 59) {
      setMinute(newMinute);
      onChange(hour, newMinute);
    }
  };

  return (
    <div className="custom-time-picker">
      <input
        type="number"
        value={hour === undefined ? "" : hour}
        onChange={handleHourChange}
      />
      :
      <input
        type="number"
        value={minute === undefined ? "" : minute}
        onChange={handleMinuteChange}
      />
    </div>
  );
};

const TestPage = () => {
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);

  const handleTimeChange = (hour: any, minute: any) => {
    setSelectedHour(hour);
    setSelectedMinute(minute);
  };

  return (
    <div className="bg-red-400">
      <h1>Olivizr </h1>
      <h1>Parent Component</h1>
      <CustomTimePicker onChange={handleTimeChange} />
      <p>
        Selected Time: {selectedHour}:{selectedMinute}
      </p>
    </div>
  );
};

export default TestPage;
