import { makeStyles } from '@mui/styles';
import theme from "../../theme";

export const useWidgetStyle = makeStyles({
  card: {
    position: "relative",
    // maxWidth: 600,
    margin: "auto",
    minHeight: 90,
    overflow: "visible"
    // marginTop: theme.spacing(5)
  },
  title: {
    textAlign: "right"
  },
  container: {
    position: "absolute",
    // border: "1px solid grey",
    width: "75px",
    height: "75px",
    top: "-16px",
    left: "10px",
    background: "red",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    borderRadius: "3px",
    boxShadow: "1px 3px 5px grey"
  },
  container_icon: {
    alignSelf: "center",
    paddingTop: "10px"
  },
  description: {
    fontSize: "12px",
    color: theme.palette.primary.main,
    paddingLeft: "5px"
  }
});
