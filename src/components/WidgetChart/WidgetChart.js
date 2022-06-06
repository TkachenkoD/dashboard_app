import React from 'react'
import theme from "../../theme";
import { CardContent, Typography, Card } from '@mui/material';
import { useWidgetChartStyle } from './widgetChartStyle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const WidgetChart = (props) => {
  const classes = useWidgetChartStyle()
  // const classes = useWidgetChartStyle(props)

  return (
    <Card className={classes.card}>
      <CardContent style={{ paddingBottom: "5px" }}>
        <Typography variant="body1" component="div" className={classes.container} style={{ background: props.chartBGColor }}>
          {props.children}
        </Typography>
        <Typography variant="h6" style={{ padding: "20px 0px 15px", color: theme.palette.secondary.main }}>
          {props.title}
        </Typography>
        <Typography component="span" className={classes.descriptionChart}>
          {props.descriptionChart}
        </Typography>
        {!!props.description && (
          <Typography component="p" style={{ padding: "5px" }}>
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