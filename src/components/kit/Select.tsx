import React from "react";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

type DataItem = {
  name: string;
  value: string;
}

type Props = {
  onChange: (data: SelectChangeEvent) => void,
  data: DataItem[];
  value: string;
  label: string;
};

export function SelectBox(props: Props) {
  const {data, onChange, value, label} = props;
  if (!data.length) {
    return null;
  }
  return (
    <FormControl fullWidth>
      <InputLabel id="level-select-label">{label}</InputLabel>
      <Select
        labelId="level-select-label"
        id="level-select"
        value={value}
        label="Level"
        onChange={onChange}
      >
        {
          data.map((dataItem, index) => {
            return <MenuItem key={index} value={dataItem.value}>{dataItem.name}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  );
}

