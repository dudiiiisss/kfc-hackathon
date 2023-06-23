import {
    Box,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Paper,
    Radio,
    RadioGroup,
    TextField,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useProducts } from "../../contexts/ProductContextProvider";
  import { useSearchParams } from "react-router-dom";
  
  const SideBar = () => {
    const { fetchByParams } = useProducts();
  
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("q") || "");
  
    useEffect(() => {
      setSearchParams({ q: search });
    }, [search]);
  
    return (
      <Grid item md={3}>
        <Paper elevation={3} sx={{ padding: "1rem" }}>
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            label="search..."
            variant="standard"
          />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="All"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("category", e.target.value)}
            >
              <FormControlLabel value="Бургеры" control={<Radio />} label="Бургеры" />
              <FormControlLabel
                value="Твистеры"
                control={<Radio />}
                label="Твистеры"
              />
               <FormControlLabel
                value="Комбо"
                control={<Radio />}
                label="Комбо"
              />
               <FormControlLabel
                value="Баскеты"
                control={<Radio />}
                label="Баскеты"
              />
               <FormControlLabel
                value="Сочная курочка"
                control={<Radio />}
                label="Сочная курочка"
              />
               <FormControlLabel
                value="Картошка и Снэки"
                control={<Radio />}
                label="Картошка и Снэки"
              />
               <FormControlLabel
                value="Соусы"
                control={<Radio />}
                label="Соусы"
              />
               <FormControlLabel
                value="Холодные напитки"
                control={<Radio />}
                label="Холодные напитки"
              />
               <FormControlLabel
                value="Горячие напитки"
                control={<Radio />}
                label="Горячие напитки"
              />
               <FormControlLabel
                value="Десерты"
                control={<Radio />}
                label="Десерты"
              />
               <FormControlLabel
                value="Мороженное"
                control={<Radio />}
                label="Мороженное"
              />
               <FormControlLabel
                value="Милкшейки"
                control={<Radio />}
                label="Милкшейки"
              />
            </RadioGroup>
          </FormControl>
          <Divider />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="All"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("_sort", e.target.value)}
            >
              <FormControlLabel value="All" control={<Radio />} label="All" />
              <FormControlLabel
                value="asc"
                control={<Radio />}
                label="Low to High"
              />
              <FormControlLabel
                value="desc"
                control={<Radio />}
                label="High to Low"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>
    );
  };
  
  export default SideBar;
  