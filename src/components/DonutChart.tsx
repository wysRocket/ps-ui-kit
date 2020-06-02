import {CSSProperties, default as React} from "react";
import Chart from 'react-apexcharts';
import {Button, Card, CardContent, CardHeader, IconButton} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {ButtonMenuItem, ButtonWithMenu} from "./ButtonWithMenu";

export interface DonutChartItem {
  label: string;
  value: number;
  color: string;
}

interface IProps {
  style?: CSSProperties;
  totalLabel?: string;
  items: DonutChartItem[];
  title: string;
  subtitle?: string;
  menuItems: ButtonMenuItem[];
}

export default class DonutChart extends React.Component<IProps> {
  render() {
    const series: number[] = [];
    const labels: string[] = [];
    const colors: string[] = [];
    this.props.items.forEach((item) => {
      series.push(item.value);
      labels.push(item.label);
      colors.push(item.color);
    });
    const options = {
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                label: this.props.totalLabel || 'Total'
              }
            }
          }
        }
      },
      series,
      labels,
      colors,
      dataLabels: {
        enabled: true,
        formatter: (val: number, opt: { seriesIndex: number, dataPointIndex: number, w: any }) => {
          return opt.w.config.series[opt.seriesIndex];
        },
        dropShadow: {
          enabled: false
        }
      },
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
    let width: string|number = 400;
    const style = this.props.style;
    if (style && style.width) {
      width = style.width;
    }
    return (
      <Card style={{boxShadow: 'none', border: '1px solid #C7C7C7'}}>
        <CardHeader
          action={
            <ButtonWithMenu items={this.props.menuItems}>
              <MoreVertIcon />
            </ButtonWithMenu>
          }
          title={this.props.title}
          subheader={this.props.subtitle}
        />
        <CardContent>
          <Chart type={'donut'} width={width} options={options} series={options.series}/>
        </CardContent>
      </Card>
    );
  }
}
