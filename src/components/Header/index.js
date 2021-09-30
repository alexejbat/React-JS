import React, {useState} from 'react';
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import {Login} from "../Login";

export const Header = (props) => {
    const [isOpenLogin, setIsOpenLogin] = useState(false);

    return <>
      <AppBar position="relative">
        <Toolbar>
          <Typography   variant="h6" color="inherit" noWrap sx= {{flexGrow: 1}}>
            Интернет-магазин
          </Typography>
  
          <Button onClick={() => setIsOpenLogin(true)} color="inherit">Войти</Button>
  
        </Toolbar>
      </AppBar>
      <Login open={isOpenLogin} handleSubmit={() => {}} onClose={() => setIsOpenLogin(false)}/>
    </>
};