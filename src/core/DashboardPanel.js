import React, { useState, useEffect } from 'react'
import Widget from '../components/Widget/Widget';
import WidgetChart from '../components/WidgetChart/WidgetChart';
import TestIcon from '../components/iconComponents/TestIcon';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DateRangeIcon from '@mui/icons-material/DateRange';
import UpdateIcon from '@mui/icons-material/Update';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import { CardContent, CardMedia, Typography, Card } from '@mui/material';

import Grid from '@mui/material/Grid';
import { list } from '../reports/api-reports';
import {
  uniqs,
  getChartsData,
  convertToChartData,
  setWeekdayName,
  getNumbers,
  setCategoriesName,
  getExtremumDates,
  getEntriesMaxDate
} from '../reports/reports-helper';

import RequestLineChart from '../reports/RequestLineChart';

const RenderVectorIcons = ({ vector, avgDate }) => {
  let icon = "";
  let color = "";

  switch (vector) {
    case "up":
      color = "green";
      icon = <ArrowUpwardIcon style={{ fontSize: "1.0rem" }} />;
      break;
    case "down":
      color = "red";
      icon = <ArrowDownwardIcon style={{ fontSize: "1.0rem" }} />;
      break;
    default:
      color = "grey"
  }

  return (
    <Grid container sx={{ color: "grey" }}>
      <Grid item style={{ paddingRight: "5px", paddingTop: "3px", color, }}>
        {icon}
      </Grid>
      <Grid item>
        <Typography variant="p">
          <Typography variant="span" style={{ color }}>{`${avgDate}`} </Typography>avg per day
        </Typography>
      </Grid>
    </Grid>
  );
};


const DashboardPanel = (props) => {
  const [report, setReport] = useState([]);
  let clients;
  let countries;
  let avgDate;
  let category;
  let weekdays;
  let reportsByCountries;
  let reportsByCategory;
  let uniq;
  let chartsDatas;
  let chartDataRepoprtByWeek;
  let chartDataRepoprtByCategory;
  let chartDataRepoprtByCountries;
  let extremumDates;
  let requestsAvgPerDay;
  let vector = "default";
  let strDate;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        console.log('list', data)
        setReport(data);
      }
    })

    return function cleanup() {
      abortController.abort();
    }
  }, [])


  if (report.length > 0) {
    // let uniqDate1 = report.length / getUniqDate(report).size;
    uniq = uniqs(report);
    clients = uniq.get('clientid').size;
    countries = uniq.get('countryid').size;
    category = uniq.get('category');
    avgDate = report.length / uniq.get('creationdate').size;

    chartsDatas = getChartsData(report, uniq.get('countryid'), category);

    chartDataRepoprtByWeek = setWeekdayName(convertToChartData(chartsDatas.reportsByWeekday));
    chartDataRepoprtByCategory = setCategoriesName(convertToChartData(chartsDatas.reportsByCategories), getNumbers);
    chartDataRepoprtByCountries = convertToChartData(chartsDatas.reportsByCountries);
    extremumDates = getExtremumDates(uniq.get('creationdate'))
    vector = avgDate > getEntriesMaxDate(extremumDates.max, report) ? "down" : "up";
    strDate = new Date(extremumDates.min).toString();
  } else {
    return <div>loading...</div>
  }

  // const renderVectorIcon = () => {
  //   // {`${vector} ${avgDate} avg per day`}
  //   return
  // }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 5, md: 4 }} >
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Widget
              icon={<ContentCopyIcon style={{ fontSize: "1.85rem" }} />}
              iconBGColor={"#FB8E03"}
              data={report.length}
              title="Reports amount"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Widget
              icon={<MapsHomeWorkIcon style={{ fontSize: "1.85rem" }} />}
              iconBGColor={"#48A34C"}
              description={`Since ${strDate}`}
              data={clients}
              title="Partner count"
              descriptionIcon={<DateRangeIcon style={{ color: "grey", fontSize: "1.0rem" }} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Widget
              icon={<InfoOutlinedIcon style={{ fontSize: "1.85rem" }} />}
              iconBGColor={"#E53B37"}
              data={countries}
              title="Countries count"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Widget
              icon={<TwitterIcon style={{ fontSize: "1.85rem" }} />}
              iconBGColor={"#0AB3C7"}
              data={avgDate}
              title="Reports rate"
              description='Per day'
              descriptionIcon={<UpdateIcon style={{ color: "grey", fontSize: "1.0rem" }} />}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "35px" }}>
        <Grid container spacing={{ xs: 5, }} >
          <Grid item xs={12} sm={12} lg={4}>
            <WidgetChart
              chartBGColor="#48A34C"
              title="Weekend breakdown"
              descriptionChart={<RenderVectorIcons vector={vector} avgDate={avgDate} />}
              description={`Starting ${strDate}`}
            >
              <RequestLineChart chartData={chartDataRepoprtByWeek} />
            </WidgetChart>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <WidgetChart
              chartBGColor="#FB8E03"
              title="Breakdown by countries"
              descriptionChart="For the hole period"
              description={`Starting ${strDate}`}
            >
              <RequestLineChart
                chartData={chartDataRepoprtByCountries}
                isBarChart={true}
              />
            </WidgetChart>

          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <WidgetChart
              chartBGColor="#E53B37"
              title="Breakdown by category"
              descriptionChart="Category number"
              description={`Starting ${strDate}`}
            >
              <RequestLineChart chartData={chartDataRepoprtByCategory} />
            </WidgetChart>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DashboardPanel;