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
  const [optionChosen, setOptionChosen] = useState("");

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  console.log(optionChosen);

  return (
    <Grid container className={styles.question_container}>
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
        <Grid item xs={12} sm={12} md={6} padding={2}>
          <Typography variant="body" lineHeight={1.5}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} padding={2}>
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
                className={
                  optionChosen === "optionA" ? styles.active : styles.deactive
                }
                value="sample answer 1"
                control={<Radio />}
                label="sample answer 1"
                onClick={() => {
                  chooseOption("optionA");
                }}
              />
              <FormControlLabel
                className={
                  optionChosen === "optionB" ? styles.active : styles.deactive
                }
                value="sample answer 2"
                control={<Radio />}
                label="sample answer 2"
                onClick={() => {
                  chooseOption("optionB");
                }}
              />
              <FormControlLabel
                className={
                  optionChosen === "optionC" ? styles.active : styles.deactive
                }
                value="sample answer 3"
                control={<Radio />}
                label="sample answer 3"
                onClick={() => {
                  chooseOption("optionC");
                }}
              />
              <FormControlLabel
                className={
                  optionChosen === "optionD" ? styles.active : styles.deactive
                }
                value="sample answer 4"
                control={<Radio />}
                label="sample answer 4"
                onClick={() => {
                  chooseOption("optionD");
                }}
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
