import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import styles from "./QuestionsScreen.module.css";

const QuestionsScreen = () => {
  const [active, setActive] = useState(false);

  const handleChange = () => {
    setActive(true);
  };

  return (
    <Grid container xs={12} className={styles.question_container}>
      <Grid item xs={12} mb={5}>
        <Typography
          align="center"
          variant="h4"
          className={styles.question_title}
        >
          Question 1
        </Typography>
      </Grid>
      <Grid container className={styles.question_second_container}>
        <Grid item xs={12} sm={12} md={6} pr={3}>
          <Typography variant="h6">Sample Question</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} pl={3}>
          <FormControl fullWidth>
            <FormLabel
              id="demo-radio-buttons-group-label"
              className={styles.question_label}
            >
              SELECT ONLY ONE
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                className={active ? "active" : "no_active"}
                value="sample answer 1"
                control={<Radio />}
                label="sample answer 1"
                onChange={handleChange}
              />
              <FormControlLabel
                className={active ? "active" : "no_active"}
                value="sample answer 2"
                control={<Radio />}
                label="sample answer 2"
                onChange={handleChange}
              />
              <FormControlLabel
                className={active ? "active" : "no_active"}
                value="sample answer 3"
                control={<Radio />}
                label="sample answer 3"
                onChange={handleChange}
              />
              <FormControlLabel
                className={active ? "active" : "no_active"}
                value="sample answer 4"
                control={<Radio />}
                label="sample answer 4"
                onChange={handleChange}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center" mt={5}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={styles.question_btn}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default QuestionsScreen;
