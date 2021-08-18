import React from "react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  id: string;
  label: string;
  options: SelectOption[];
  placeholderOption: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

// Destructuring props within the method signature to avoid repeating the word props
export function Select({
  placeholderOption,
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <select onChange={onChange}>
      <option value="">{placeholderOption}</option>
      {options.map((option) => (
        <option
          selected={value === option.value}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
