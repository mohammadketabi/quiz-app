import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./ResultScreen.module.css";
import { handleScoreChange } from "../../redux/actions";

const ResultScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { score } = useSelector((state) => state);

  const handleBackToFirst = () => {
    dispatch(handleScoreChange(0));
    history.push("/");
  };

  return (
    <Grid container className={styles.result_container}>
      <Grid item>
        <Typography
          textAlign="center"
          variant="h6"
          className={styles.score_title}
        >
          Your Score {score}/10
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={styles.score_btn}
          onClick={handleBackToFirst}
        >
          Back To Home!
        </Button>
      </Grid>
    </Grid>
  );
};

export default ResultScreen;
