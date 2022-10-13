import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { decode } from "html-entities";

import useAxios from "../../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";

import styles from "./QuestionsScreen.module.css";
import { useHistory } from "react-router-dom";

import { handleScoreChange } from "../../redux/actions";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const QuestionsScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { question_category, score } = useSelector((state) => state);

  let apiUrl = `/api.php?amount=10&category=${question_category}&difficulty=easy&type=multiple`;

  const { response, loading } = useAxios({ url: apiUrl });

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [optionChosen, setOptionChosen] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [valueSelected, setValueSelected] = useState("");
  const [hint, setHint] = useState(false);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
      setCorrectAnswer(question.correct_answer);
    }
  }, [response, questionIndex]);

  const handleRadioChange = (event) => {
    setValueSelected(event.target.value);
  };

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const handleSubmitQuestion = (event) => {
    event.preventDefault();
    if (!valueSelected) return;
    const question = response.results[questionIndex];
    if (valueSelected === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
      setValueSelected(null);
      setHint(false);
    } else {
      history.push("/result");
    }
  };

  const handleHint = () => {
    setHint(true);
  };

  return (
    <Grid container className={styles.question_container}>
      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <form onSubmit={handleSubmitQuestion}>
          <Grid item xs={12} mb={5}>
            <Typography
              align="center"
              variant="h4"
              className={styles.question_title}
            >
              Question {questionIndex + 1}
            </Typography>
          </Grid>
          <Grid container className={styles.question_second_container}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              padding={2}
              className={styles.question_hint}
            >
              <Typography variant="body" lineHeight={1.5}>
                {decode(response.results[questionIndex].question)}
              </Typography>
              {hint ? (
                <Typography variant="caption" className={styles.hint}>
                  The Answer is: {decode(correctAnswer)}
                </Typography>
              ) : null}
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
                  {options.map((data, id) => (
                    <FormControlLabel
                      key={id}
                      className={
                        optionChosen === data ? styles.active : styles.deactive
                      }
                      value={data}
                      control={<Radio />}
                      label={decode(data)}
                      onClick={() => {
                        chooseOption(data);
                      }}
                      onChange={handleRadioChange}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              xs={12}
              display="flex"
              justifyContent="space-evenly"
              mt={5}
              spacing={1}
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={styles.question_btn}
                  type="button"
                  onClick={handleHint}
                >
                  Hint
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={styles.question_btn}
                  type="submit"
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </Grid>
  );
};

export default QuestionsScreen;
