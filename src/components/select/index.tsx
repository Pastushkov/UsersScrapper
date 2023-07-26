import { getValue } from "@testing-library/user-event/dist/utils";
import React, { ChangeEvent, FC, useState } from "react";

interface IProps {
  options: { value: any; label: string }[];
  onChange: (value: any) => void;
}

const Select: FC<IProps> = ({ options, onChange }) => {
  const [selected, setSelected] = useState<undefined | string>(undefined);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    onChange(value);
  };

  const reset = () => {
    setSelected('');
    onChange(null);
  };

  

  return (
    <>
      <select onChange={handleChange} defaultValue={''} value={selected}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <button onClick={reset}>Reset user</button>
    </>
  );
};
export default Select;
