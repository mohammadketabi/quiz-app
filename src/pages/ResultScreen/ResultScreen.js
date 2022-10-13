import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./ResultScreen.module.css";

const ResultScreen = () => {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent="center"
      alignContent={"center"}
    >
      <Grid item>
        <Typography
          textAlign="center"
          variant="h6"
          className={styles.score_title}
        >
          Your Score 10/10
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={styles.score_btn}
        >
          Back To Home!
        </Button>
      </Grid>
    </Grid>
  );
};

export default ResultScreen;
