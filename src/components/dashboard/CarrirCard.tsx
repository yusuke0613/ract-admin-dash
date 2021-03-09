import React from "react";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
//import { selectDaily } from "../covidSlice";

const useStyles = makeStyles(() =>
  createStyles({
    container: {},
    infected: {
      borderLeft: "5px solid #33a3ff",
      borderRadius: "0% !important",
    },

    recovered: {
      borderLeft: "5px solid #33a3ff",
      borderRadius: "0% !important",
    },

    deaths: {
      borderLeft: "5px solid #33a3ff",
      borderRadius: "0% !important",
    },
  })
);

const CarrirCard: React.FC = () => {
  //const daily = useSelector(selectDaily);
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Grid container justify="center">
        <Grid item xs={4} md={4} component={Card} className={styles.infected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              docomo
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={40} duration={3.5} separator="," />%
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} md={4} component={Card} className={styles.recovered}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              au
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={30} duration={3.5} separator="," />%
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} md={4} component={Card} className={styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              SB
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={20} duration={3.5} separator="," />%
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} md={4} component={Card} className={styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              SB
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={20} duration={3.5} separator="," />%
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} md={4} component={Card} className={styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              SB
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={20} duration={3.5} separator="," />%
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} md={4} component={Card} className={styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              SB
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={20} duration={3.5} separator="," />%
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default CarrirCard;
