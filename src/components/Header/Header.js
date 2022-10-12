import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <AppBar color="primary">
      <Toolbar className={styles.header}>
        <QuizIcon className={styles.icon} />
        <Typography variant="h6">Quiz App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
