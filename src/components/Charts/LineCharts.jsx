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
  lineCustomSeries,
  LinePrimaryAxis,
  LinePrimaryXAxis,
} from "../../data/dummy";
const LineChart = () => {
  return (
    <ChartComponent>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip, DateTime]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
