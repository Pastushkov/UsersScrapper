import React, { ChangeEvent, FC, useState } from "react";
import { Select, Option, Wrapper, Button, Label } from "./style";

interface IProps {
  options: { value: string; label: string }[];
  onChange: (value: number | null) => void;
  label?: string;
}

const CustomSelect: FC<IProps> = ({ options, onChange, label }) => {
  const [selected, setSelected] = useState<undefined | string>(undefined);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;
    setSelected(value);
    onChange(+value);
  };

  const reset = () => {
    setSelected("");
    onChange(null);
  };

  return (
    <Wrapper>
      {label && <Label htmlFor="select">{label}</Label>}

      <Select
        onChange={handleChange}
        defaultValue=""
        value={selected}
        id="select"
      >
        {options.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
      <Button onClick={reset}>Reset user</Button>
    </Wrapper>
  );
};

CustomSelect.defaultProps={
  label: undefined
}

export default CustomSelect;