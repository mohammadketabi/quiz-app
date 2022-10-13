import React from "react";
import { Grid, Typography } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Grid container className={styles.header}>
      <Grid item>
        <QuizIcon fontSize="large" className={styles.icon} />
      </Grid>
      <Grid item>
        <Typography variant="h4" className={styles.header_title}>
          Quiz App
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
