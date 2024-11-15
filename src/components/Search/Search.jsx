import { Button, Input } from "antd";
import React, { useState } from "react";
import Icons from "../../lib/Icons";
import styles from "./search.module.scss"

import { useDispatch } from 'react-redux';
import { findUsersByNameThunk } from "../../store/slice/users.slice";

function Search() {

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => setSearch(e.target.value);  
  const findByName = () => dispatch(findUsersByNameThunk(search));
    
  return (
    <div className={styles["container-search"]}>
      <label htmlFor="search">Busca por Nombre</label>
      <div className={styles.search}>
        <Input
          onChange={handleSearch}
          id="search"
          size="large"
          placeholder="ingresa el nombre aquí"
        />
        <Button
          color="primary"
          variant="solid"
          type="default"
          onClick={findByName}
        >
          <Icons icon={"lens"} />
        </Button>
      </div>
    </div>
  );
}

export default Search;
