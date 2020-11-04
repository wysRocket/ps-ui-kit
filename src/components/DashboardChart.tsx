import {CSSProperties, default as React} from "react";
import Chart from 'react-apexcharts';
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {ButtonMenuItem, ButtonWithMenu} from "./ButtonWithMenu";
import FilterIcon from '@material-ui/icons/FilterList';
import {HGroup} from "./Group";

export interface DashboardChartData {
  xAxisType: string;
  xData: number[];
  yLabels: string[];
}

interface IProps {
  style?: CSSProperties;
  chartId?: string;
  data: DashboardChartData;
  title?: string;
  subtitle?: string;
  filterItems?: ButtonMenuItem[];
}

export default class DashboardChart extends React.Component<IProps> {
  render() {
    const data = this.props.data;
    const spark1 = {
      chart: {
        id: this.props.chartId || 'sparkline1',
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
        name: this.props.title || '',
        data: data.xData
      }],
      labels: data.yLabels,
      yaxis: {
        min: 0
      },
      xaxis: {
        type: data.xAxisType || 'datetime',
      },
      colors: ['#DCE6EC'],
      /*title: {
        text: this.props.title || '',
        offsetX: 30,
        style: {
          fontSize: '24px',
          cssClass: 'apexcharts-yaxis-title'
        }
      },
      subtitle: {
        text: this.props.subtitle || '',
        offsetX: 30,
        style: {
          fontSize: '14px',
          cssClass: 'apexcharts-yaxis-title'
        }
      }*/
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
            <HGroup>
              {this.renderFilterButton()}
            </HGroup>
          }
          title={this.props.title}
          subheader={this.props.subtitle}
        />
        <CardContent>
          <Chart type={'area'} options={spark1} series={spark1.series} width={width}/>
        </CardContent>
      </Card>
    );
  }

  renderFilterButton() {
    const items = this.props.filterItems;
    if (!items || !items.length) {
      return '';
    }

    return (
      <div style={{paddingRight: 5}}>
        <ButtonWithMenu items={items}>
          <FilterIcon />
        </ButtonWithMenu>
      </div>
    );
  }
}
