import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectLabels({data}) {
  const [assistant, setAssistant] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAssistant(event.target.value);
    localStorage.setItem('selectedAssistant', event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-helper-label">Assistant</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={assistant}
          label="Age"
          onChange={handleChange}
        >
          {data && data.map((assistant) => (
            <MenuItem key={assistant.id} value={assistant.id}>{assistant.name}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Escolha um assistente</FormHelperText>
      </FormControl>
    </div>
  );
}
