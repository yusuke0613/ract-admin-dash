import React from "react";
import Assessment from "@material-ui/icons/Assessment";
import PermIdentity from "@material-ui/icons/PermIdentity";
import SettingsPower from "@material-ui/icons/SettingsPower";
import VpnKey from "@material-ui/icons/VpnKey";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { cyan, pink, purple } from "@material-ui/core/colors";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
const cyan600 = cyan["600"];
const pink600 = pink["600"];
const purple600 = purple["600"];

const data = {
  menus: [
    { text: "DashBoard", icon: <Assessment />, link: "/dashboard" },
    { text: "Customer", icon: <PermIdentity />, link: "/customers" },
    { text: "Order", icon: <ShoppingCartOutlinedIcon />, link: "/orders" },
    { text: "Product", icon: <StoreOutlinedIcon />, link: "/products" },
    { text: "About", icon: <InfoOutlinedIcon />, link: "/about" },
  ],
  userMenus: [
    { text: "Sign out", icon: <SettingsPower />, link: "/login" },
    { text: "Change password", icon: <VpnKey />, link: "" },
  ],
  tablePage: {
    items: [
      {
        anNo: "20210201-0001",
        date: "2021/02/01 10:11:11",
        crewName: "クルーA",
        category: "回答済",
      },
      {
        anNo: "20210201-0002",
        name: "2021/02/01 11:11:11",
        crewName: "クルーA",
        category: "回答済",
      },
      {
        anNo: "20210201-0003",
        name: "2021/02/01 12:11:11",
        crewName: "クルーA",
        category: "回答済",
      },
      {
        anNo: "20210201-0004",
        name: "2021/02/01 13:11:11",
        crewName: "クルーA",
        category: "回答済",
      },
      {
        anNo: "20210201-0005",
        name: "2021/02/01 14:11:11",
        crewName: "クルーB",
        category: "回答済",
      },
      {
        anNo: "20210201-0006",
        name: "2021/02/01 15:11:11",
        crewName: "クルーB",
        category: "回答済",
      },
      {
        anNo: "20210201-0007",
        name: "2021/02/01 16:11:11",
        crewName: "クルーB",
        category: "回答済",
      },
      {
        anNo: "20210201-0008",
        name: "2021/02/01 17:11:11",
        crewName: "クルーB",
        category: "回答済",
      },
      {
        anNo: "20210201-0009",
        name: "2021/02/01 18:11:11",
        crewName: "クルーC",
        category: "回答済",
      },
      {
        anNo: "20210201-0010",
        name: "2021/02/01 19:11:11",
        crewName: "クルーC",
        category: "回答済",
      },
      {
        anNo: "20210201-0011",
        name: "2021/02/01 20:11:11",
        crewName: "クルーC",
        category: "回答済",
      },
    ],
  },
  dashBoardPage: {
    recentProducts: [
      {
        id: 1,
        title: "Samsung TV",
        text: "Samsung 32 1080p 60Hz LED Smart HDTV.",
      },
      { id: 2, title: "Playstation 4", text: "PlayStation 3 500 GB System" },
      {
        id: 3,
        title: "Apple iPhone 6",
        text: "Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G ",
      },
      {
        id: 4,
        title: "Apple MacBook",
        text: "Apple MacBook Pro MD101LL/A 13.3-Inch Laptop",
      },
    ],
    monthlySales: [
      { name: "Jan", uv: 3700 },
      { name: "Feb", uv: 3000 },
      { name: "Mar", uv: 2000 },
      { name: "Apr", uv: 2780 },
      { name: "May", uv: 2000 },
      { name: "Jun", uv: 1800 },
      { name: "Jul", uv: 2600 },
      { name: "Aug", uv: 2900 },
      { name: "Sep", uv: 3500 },
      { name: "Oct", uv: 3000 },
      { name: "Nov", uv: 2400 },
      { name: "Dec", uv: 2780 },
    ],
    newOrders: [
      { pv: 2400 },
      { pv: 1398 },
      { pv: 9800 },
      { pv: 3908 },
      { pv: 4800 },
      { pv: 3490 },
      { pv: 4300 },
    ],
    browserUsage: [
      { name: "Chrome", value: 800, color: cyan600, icon: <ExpandMore /> },
      { name: "Firefox", value: 300, color: pink600, icon: <ChevronRight /> },
      { name: "Safari", value: 300, color: purple600, icon: <ExpandLess /> },
    ],
    lineBarChart: [
      { name: "Page A", uv: 590, pv: 800, amt: 1400 },
      { name: "Page B", uv: 868, pv: 967, amt: 1506 },
      { name: "Page C", uv: 1397, pv: 1098, amt: 989 },
      { name: "Page D", uv: 1480, pv: 1200, amt: 1228 },
      { name: "Page E", uv: 1520, pv: 1108, amt: 1100 },
      { name: "Page F", uv: 1400, pv: 680, amt: 1700 },
    ],
  },
};

export default data;
