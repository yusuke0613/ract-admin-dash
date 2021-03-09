import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PageBase from "../components/PageBase";
import { Grid, useTheme, useMediaQuery } from "@material-ui/core";
import { cyan, pink, purple, orange, grey } from "@material-ui/core/colors";
import RadioButtonsGroup from "../components/RadioGroup";
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const grey600 = grey["600"];
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 60,
    padding: 20,
  },
  navigation: {
    fontSize: 15,
    fontWeight: 400, //TypographyStyle.fontWeightLight,
    color: grey600,
    // paddingBottom: 15,
    display: "block",
  },
}));

export default function Ann() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="1人目" {...a11yProps(0)} />
          <Tab label="2人目" {...a11yProps(1)} />
          <Tab label="3人目" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <RadioButtonsGroup></RadioButtonsGroup>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RadioButtonsGroup></RadioButtonsGroup>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RadioButtonsGroup></RadioButtonsGroup>
      </TabPanel>
    </div>
  );
}
