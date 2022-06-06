import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { makeStyles } from '@mui/styles';

import TabPanel from '../TabPanel';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import theme from "../theme";
import DashboardPanel from "./DashboardPanel";

const drawerWidth = 210;

const useTabsStyle = makeStyles({
  tabs: {
    margin: "15px 0",
    paddingBottom: "15px",
    minHeight: "250px",
    "& .MuiTabs-indicator": {
      display: "none"
      //backgroundColor: "orange"
    },
  },
  tab: {
    minHeight: "45px",
    height: "45px",
    justifyContent: "flex-start",
    color: theme.palette.primary.main,
  }
});


const MainPanel = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, setValue] = useState("Dashboard");
  const classes = useTabsStyle();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const innerTabs = (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{ borderRight: 1, borderColor: "divider" }}
      className={classes.tabs}
    >
      <Tab className={classes.tab} label="Dashboard" icon={<DashboardIcon />} iconPosition="start" value="Dashboard" key="1" />
      <Tab className={classes.tab} label="User profile" icon={<PersonIcon />} iconPosition="start" value="User profile" key="2" />
      <Tab className={classes.tab} label="Table list" icon={<ListAltIcon />} iconPosition="start" value="Table list" key="3" />
    </Tabs>
  );

  const container = window !== undefined
    ? () => window().document.body
    : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        title={value}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar
          drawerWidth={drawerWidth}
          container={container}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          innerTabs={innerTabs}
        />
      </Box>
      <Box
        component="main"
        style={{ background: "#EEEEEE", height: "100%" }}
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <TabPanel value={value} index={"Dashboard"}>
          <DashboardPanel
          // fetchedData={}
          // setFetchedData={}
          />
        </TabPanel>
        <TabPanel value={value} index={"User profile"}>
          [ User profile - under constraction]
        </TabPanel>
        <TabPanel value={value} index={"Table list"}>
          [Table list - under constraction]
        </TabPanel>
      </Box>
    </Box>
  );
}

export default MainPanel;
