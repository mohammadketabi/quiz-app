import { Grid, Typography } from "@mui/material";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Grid container className={styles.footer}>
      <Grid item>
        <Typography fontFamily="inherit">
          Copyright © Mohammad Ketabi 2022
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
