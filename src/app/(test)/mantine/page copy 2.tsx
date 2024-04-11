"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import "./CustomTimePicker.css";

const schema = z.object({
  hour: z.number().min(0).max(23).nullable(),
  minute: z.number().min(0).max(59).nullable(),
});

type CustomTimePickerProps = {
  onChange: (hour?: number, minute?: number) => void;
};
const CustomTimePicker = ({ onChange }: CustomTimePickerProps) => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    onChange(data.hour, data.minute);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="custom-time-picker">
      <Controller
        name="hour"
        control={control}
        render={({ field }) => (
          <input type="number" {...field} placeholder="Hour" />
        )}
      />
      :
      <Controller
        name="minute"
        control={control}
        render={({ field }) => (
          <input type="number" {...field} placeholder="Minute" />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// export default CustomTimePicker;

const TestPage = () => {
  const [selectedHour, setSelectedHour] = useState<number>();
  const [selectedMinute, setSelectedMinute] = useState<number>();

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
