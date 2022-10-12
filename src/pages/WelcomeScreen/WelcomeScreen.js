import { Button, Container, Grid, Typography } from "@mui/material";
import styles from "./WelcomeScreen.module.css";
import React from "react";

const WelcomeScreen = () => {
  return (
    <Container>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Typography
            mb={5}
            align="center"
            variant="h4"
            className={styles.title}
          >
            Please Select A Quiz
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid mb={3} item xs={12} className={styles.button_container}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={styles.button}
              >
                Test 1
              </Button>
            </Grid>
            <Grid mb={3} item xs={12} className={styles.button_container}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={styles.button}
              >
                Test 2
              </Button>
            </Grid>
            <Grid mb={3} item xs={12} className={styles.button_container}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={styles.button}
              >
                Test 3
              </Button>
            </Grid>
            <Grid mb={3} item xs={12} className={styles.button_container}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={styles.button}
              >
                Test 4
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WelcomeScreen;
