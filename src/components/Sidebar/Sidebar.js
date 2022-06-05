import React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LanguageIcon from '@mui/icons-material/Language';
import { makeStyles } from '@mui/styles';
import theme from "../../theme";

const useStyles = makeStyles({
  paper: {
    // background: "silver",
    boxShadow: "0px  26px 35px 10px  rgba(149, 165, 166, 0.85)",
  }
});


const Sidebar = (props) => {
  const classes = useStyles();
  const drawer = (
    <div>
      <Toolbar style={{ minHeight: "25px" }} />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: "center",
        paddingBottom: "20px",
        fontSize: "14px",
        fontWeight: "600",
        color: theme.palette.secondary.main
      }}>
        <LanguageIcon />
        <span style={{ marginLeft: "10px" }}>INTENT IQ</span>
      </div>
      <Divider />
      {props.innerTabs}
    </div>
  );

  return (
    <>
      <Drawer
        container={props.container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth
          }
        }}

      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth
          }
        }}
        classes={{ paper: classes.paper }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Sidebar;