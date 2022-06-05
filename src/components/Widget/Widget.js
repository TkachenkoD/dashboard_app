import React from 'react'
import theme from "../../theme";
import { CardContent, Typography, Card } from '@mui/material';
import { useWidgetStyle } from './widgetStyle';

const Widget = (props) => {
  const classes = useWidgetStyle()
  // const classes = useWidgetStyle(props)
  return (
    <Card className={classes.card}>
      <CardContent style={{ paddingBottom: "3px" }}>
        <Typography variant="body1" component="div" className={classes.container} style={{ background: props.iconBGColor }}>
          <Typography component="p" className={classes.container_icon} >
            {props.icon}
          </Typography>
        </Typography>
        <Typography variant="body2" component="p" className={classes.title} style={{ color: theme.palette.primary.main }}>
          {props.title}
        </Typography>
        <Typography variant="h6" className={classes.title} style={{ fontSize: "1.35rem", color: theme.palette.secondary.main }}>
          {props.data}
        </Typography>
        {!!props.description && (
          <div style={{ padding: "5px", marginTop: "5px" }} >
            <div style={{
              display: 'flex',
              flexDirection: "row",
              borderTop: `1px solid ${theme.palette.primary.main}`, paddingTop: "10px",
            }}>
              {props.descriptionIcon}
              <span className={classes.description}>{props.description}</span>
            </div>
          </div>)
        }
      </CardContent>
    </Card >

  );
}

export default Widget;