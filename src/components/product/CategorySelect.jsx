import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CategorySelect({ product, setProduct }) {
  function handleChange(e) {
    setProduct({ ...product, category: e.target.value });
  }
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue=""
        label="Category"
        value={product.category}
        onChange={handleChange}
      >
        <MenuItem value="Бургеры">Бургеры</MenuItem>
        <MenuItem value="Твистеры">Твистеры</MenuItem>
        <MenuItem value="Комбо">Комбо</MenuItem>
        <MenuItem value="Баскеты">Баскеты</MenuItem>
        <MenuItem value="Сочная курочка">Сочная курочка</MenuItem>
        <MenuItem value="Картошка и Снэки">Картошка и Снэки</MenuItem>
        <MenuItem value="Соусы">Соусы</MenuItem>
        <MenuItem value="Холодные напитки">Холодные напитки</MenuItem>
        <MenuItem value="Горячие напитки">Горячие напитки</MenuItem>
        <MenuItem value="Десерты">Десерты</MenuItem>
        <MenuItem value="Мороженное">Мороженное</MenuItem>
        <MenuItem value="Милкшейки">Милкшейки</MenuItem>
      </Select>
    </FormControl>
  );
}
