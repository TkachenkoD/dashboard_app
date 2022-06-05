import { makeStyles } from '@mui/styles';
import theme from "../../theme";

export const useWidgetChartStyle = makeStyles({
  card: {
    position: "relative",
    margin: "auto",
    minHeight: 400,
    overflow: "visible"
  },
  container: {
    marginTop: "-30px",// lift up inner block
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    borderRadius: "3px",
    boxShadow: "1px 3px 5px grey"
  },
  descriptionChart: {
    fontSize: "15px",
    padding: "0px 0px 10px",
    color: theme.palette.primary.main
  },
  description: {
    fontSize: "12px",
    color: theme.palette.primary.main,
    paddingLeft: "5px"
  }
});

