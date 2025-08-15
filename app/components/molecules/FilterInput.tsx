import React from "react";
import Input from "../atoms/Input";

type FilterInputProps = {
  threshold: string;
  setThreshold: (value: string) => void;
};

const FilterInput: React.FC<FilterInputProps> = ({ threshold, setThreshold }) => {
  return (
    <div className="mb-4">
      <Input
        value={threshold}
        onChange={setThreshold}
        placeholder="Enter sales threshold"
      />
    </div>
  );
};

export default FilterInput;
