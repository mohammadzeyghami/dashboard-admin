import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Tooltip,
  LineSeries,
  DateTime,
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSerie,
  LinePrimaryAxis,
  LinePrimaryXAxis,
} from "../../data/dummy";
const LineChart = () => {
  return (
    <ChartComponent>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip, DateTime]} />
    </ChartComponent>
  );
};

export default LineChart;
