import { Button, Grid, Typography } from "@mui/material";
import styles from "./WelcomeScreen.module.css";
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleCategoryChange } from "../../redux/actions";

const WelcomeScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickBtn1 = () => {
    dispatch(handleCategoryChange("9"));
    history.push("/questions");
  };

  const handleClickBtn2 = () => {
    dispatch(handleCategoryChange("11"));
    history.push("/questions");
  };

  const handleClickBtn3 = () => {
    dispatch(handleCategoryChange("15"));
    history.push("/questions");
  };

  const handleClickBtn4 = () => {
    dispatch(handleCategoryChange("18"));
    history.push("/questions");
  };

  return (
    <Grid container className={styles.welcome_container}>
      <Grid item>
        <Typography mb={5} align="center" variant="h4" className={styles.title}>
          Please Select A Quiz
        </Typography>
      </Grid>
      <Grid item>
        <Grid container flexDirection="column">
          <Grid mb={3} item className={styles.button_container}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={styles.button}
              onClick={handleClickBtn1}
            >
              General Knowledge
            </Button>
          </Grid>
          <Grid mb={3} item className={styles.button_container}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={styles.button}
              onClick={handleClickBtn2}
            >
              Film
            </Button>
          </Grid>
          <Grid mb={3} item className={styles.button_container}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={styles.button}
              onClick={handleClickBtn3}
            >
              Video Games
            </Button>
          </Grid>
          <Grid mb={3} item className={styles.button_container}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={styles.button}
              onClick={handleClickBtn4}
            >
              Computers
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WelcomeScreen;
