import {CSSProperties, default as React} from "react";
import Chart from 'react-apexcharts';

interface IProps {
  style?: CSSProperties;
}

export default class DashboardChart extends React.Component<IProps> {
  render() {
    const options = {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    };
    const series = [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }];

    let width: string|number = 400;
    const style = this.props.style;
    if (style && style.width) {
      width = style.width;
    }

    return (
      <Chart type={'line'} options={options} series={series} width={width}/>
    );
  }
}
