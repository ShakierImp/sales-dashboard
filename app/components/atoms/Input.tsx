import React from "react";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default Input;
