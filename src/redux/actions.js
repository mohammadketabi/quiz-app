import { CHANGE_CATEGORY, CHANGE_SCORE } from "./actionsTypes";

export const handleCategoryChange = (payload) => {
  return { type: CHANGE_CATEGORY, payload };
};

export const handleScoreChange = (payload) => {
  return { type: CHANGE_SCORE, payload };
};
