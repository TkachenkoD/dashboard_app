import React from 'react'
import theme from "../../theme";
import { CardContent, Typography, Card } from '@mui/material';
import { useWidgetChartStyle } from './widgetChartStyle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import Grid from "@mui/material/Grid";

const WidgetChart = (props) => {
  const classes = useWidgetChartStyle()
  // const classes = useWidgetChartStyle(props)

  return (
    <Card className={classes.card}>
      <CardContent style={{ paddingBottom: "5px" }}>
        <Typography variant="body1" component="div" className={classes.container} style={{ background: props.chartBGColor }}>
          {/* <Typography component="p" className={classes.container_icon} > */}
          {/* {props.chart} */}
          {props.children}
          {/* </Typography> */}
        </Typography>
        <Typography variant="h6" style={{ padding: "20px 0px 15px", color: theme.palette.secondary.main }}>
          {props.title}
        </Typography>
        <Typography component="span" className={classes.descriptionChart}>
          {props.descriptionChart}
        </Typography>
        {!!props.description && (
          <Typography component="p" style={{ padding: "5px" }}>
            {/* <Grid container sx={{ color: "grey", marginTop: "10px", borderTop: "1px solid silver", paddingTop: "10px" }}>
              <Grid item style={{ paddingRight: "5px", paddingTop: "3px" }}>
                <AccessTimeIcon style={{ color: "grey", fontSize: "1.0rem" }} />
              </Grid>
              <Grid item>
                <Typography variant="p" className={classes.description}>
                  {props.description}
                </Typography>
              </Grid>
            </Grid> */}
            <Typography component="span" style={{
              display: 'flex',
              flexDirection: "row",
              borderTop: `1px solid ${theme.palette.primary.main}`, paddingTop: "10px",
            }}>
              <AccessTimeIcon style={{ color: "grey", fontSize: "1.0rem" }} />
              <span className={classes.description}>{props.description}</span>
            </Typography>
          </Typography>)
        }
      </CardContent>
    </Card >
  );
}

export default WidgetChart;