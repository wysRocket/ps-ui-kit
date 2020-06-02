import {CSSProperties, default as React} from "react";
import Chart from 'react-apexcharts';
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {ButtonWithMenu} from "./ButtonWithMenu";
import MoreVertIcon from "@material-ui/core/SvgIcon/SvgIcon";

const randomizeArray = (arg: any[]) => {
  const array = arg.slice();
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

interface IProps {
  style?: CSSProperties;
}

export default class DashboardChart extends React.Component<IProps> {
  render() {
    const sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

    const colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'];

    const spark1 = {
      chart: {
        id: 'sparkline1',
        group: 'sparklines',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 1,
      },
      series: [{
        name: 'Sales',
        data: randomizeArray(sparklineData)
      }],
      labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
      yaxis: {
        min: 0
      },
      xaxis: {
        type: 'datetime',
      },
      colors: ['#DCE6EC'],
      title: {
        text: '$424,652',
        offsetX: 30,
        style: {
          fontSize: '24px',
          cssClass: 'apexcharts-yaxis-title'
        }
      },
      subtitle: {
        text: 'Sales',
        offsetX: 30,
        style: {
          fontSize: '14px',
          cssClass: 'apexcharts-yaxis-title'
        }
      }
    };
    const options = {
      chart: {
        height: 350,
        type: 'area',
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
      menubar: {
        show: false,
      },
      toolbar: {
        show: false,
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
      <Card style={{boxShadow: 'none', border: '1px solid #C7C7C7'}}>
        <CardHeader/>
        <CardContent>
          <Chart type={'area'} options={spark1} series={spark1.series} width={width}/>
        </CardContent>
      </Card>
    );
  }
}
