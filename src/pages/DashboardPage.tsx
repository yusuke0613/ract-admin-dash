import React from "react";
import Assessment from "@material-ui/icons/Assessment";
import Face from "@material-ui/icons/Face";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import InfoBox from "../components/dashboard/InfoBox";
import NewOrders from "../components/dashboard/NewOrders";
import MonthlySales from "../components/dashboard/MonthlySales";
import BrowserUsage from "../components/dashboard/BrowserUsage";
import LineBarChart from "../components/dashboard/LineBarChart";
import Data from "../data";
import Header from "../_layouts/DashboardLayout/Header";
import Sidebar from "../_layouts/DashboardLayout/Sidebar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Theme } from "../_theme";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { cyan, pink, purple, orange, grey } from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";
import BorderLineChart from "../components/dashboard/BorderLineChart";
import CarrirCard from "../components/dashboard/CarrirCard";

const cyan600 = cyan["600"];
const pink600 = pink["600"];
const purple600 = purple["600"];
const orange600 = orange["600"];
const grey600 = grey["600"];

const styles = {
  navigation: {
    fontSize: 15,
    fontWeight: 400, //TypographyStyle.fontWeightLight,
    color: grey600,
    // paddingBottom: 15,
    display: "block",
  },
  container: {
    marginTop: "3em",
  },
  cell: {
    padding: "1em",
  },
  content: {
    paddingTop: 60,
    padding: 20,
  },
};

const DashboardPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = !isDesktop;

  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = React.useState(false);
  const [
    isSidebarCollapsedDesktop,
    setIsSidebarCollapsedDesktop,
  ] = React.useState(false);
  return (
    <div style={styles.content}>
      <Grid container style={styles.container} spacing={2}>
        <Grid item style={styles.cell} xs={12} md={6}>
          <CarrirCard />
        </Grid>
        <Grid item style={styles.cell} xs={12} md={6}>
          <BorderLineChart />
        </Grid>
        <Grid item style={styles.cell} xs={12} md={6}>
          <NewOrders data={Data.dashBoardPage.newOrders} />
        </Grid>
        <Grid item style={styles.cell} xs={12} md={6}>
          <MonthlySales data={Data.dashBoardPage.monthlySales} />
        </Grid>
        <Grid item style={styles.cell} xs={12} md={6}>
          <LineBarChart data={Data.dashBoardPage.lineBarChart} />
        </Grid>
        <Grid item style={styles.cell} xs={12} md={6}>
          <BrowserUsage data={Data.dashBoardPage.browserUsage} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardPage;
