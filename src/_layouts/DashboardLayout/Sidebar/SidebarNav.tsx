import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

import IconSales from "@material-ui/icons/MonetizationOn";
import IconProfile from "@material-ui/icons/AccountBox";
import IconAccount from "@material-ui/icons/AccountBalance"; //
import IconAdmin from "@material-ui/icons/VpnKey";
import IconMisc from "@material-ui/icons/MoreHoriz";

import IconDashboard from "@material-ui/icons/Dashboard";
import IconPersonalVideo from "@material-ui/icons/PersonalVideo";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
import IconQuestionAnswer from "@material-ui/icons/QuestionAnswer";
import IconStars from "@material-ui/icons/Stars";
import IconNewReleases from "@material-ui/icons/NewReleases";
import IconSettings from "@material-ui/icons/Settings";
import IconGroup from "@material-ui/icons/Group";
import IconInfo from "@material-ui/icons/Info"; //
import Header from "../Header";

import { Theme } from "../../../_theme";
import SidebarNavItems from "./SidebarNavItems";

export interface SidebarNavProps {
  isCollapsed: boolean;
}

const SidebarNav = (props: SidebarNavProps) => {
  const { isCollapsed } = props;
  const classes = useStyles();

  const itemsProfile = [
    {
      name: "リアルタイム回答",
      link: "/customers",
      Icon: IconInfo,
    },
    {
      name: "結果BI",
      link: "/",
      Icon: IconSettings,
    },
  ];

  const itemsAuth = [
    {
      name: "アンケート回答",
      link: "/ann",
      Icon: IconLibraryBooks,
      IconClassName: classes.iconDiscuss,
    },
    {
      name: "成約登録",
      link: "/products",
      Icon: IconLibraryBooks,
      IconClassName: classes.iconDiscuss,
    },
  ];

  const itemsCoreModules = [
    {
      name: "実績登録",
      items: itemsAuth,
      Icon: IconLibraryBooks,
      IconClassName: classes.iconDiscuss,
    },
    {
      name: "実績照会",
      items: itemsProfile,
      Icon: IconDashboard,
      IconClassName: classes.iconDiscuss,
    },
  ];

  const itemsUI = [
    {
      name: "UI Components",
      link: "/demo/components",
      Icon: IconPersonalVideo,
    },
  ];

  const itemsTheme = [
    {
      name: "test",
      link: "/demo/docs",
      Icon: IconLibraryBooks,
      IconClassName: classes.iconDocs,
    },
    {
      name: "test",
      link: "/demo/supporters",
      Icon: IconStars,
      IconClassName: classes.iconSupporters,
    },
    {
      name: "test",
      link: "/demo/discuss",
      Icon: IconQuestionAnswer,
      IconClassName: classes.iconDiscuss,
    },
  ];

  return (
    <div>
      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
            User Menu
          </ListSubheader>
        )}
        <SidebarNavItems isCollapsed={isCollapsed} items={itemsCoreModules} />
      </List>

      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
            Admin Menu
          </ListSubheader>
        )}
        <SidebarNavItems isCollapsed={isCollapsed} items={itemsTheme} />
      </List>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navList: {
      width: theme.sidebar.width,
      fontSize: "1.1em",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    navListHeader: {
      textAlign: "center",
    },
    iconFeatures: {
      color: "#95de3c",
    },
    iconDocs: {
      color: "#f8cda9",
    },
    iconSupporters: {
      color: "#e3b546",
    },
    iconDiscuss: {
      color: "#ccc",
    },
  })
);

export default SidebarNav;
