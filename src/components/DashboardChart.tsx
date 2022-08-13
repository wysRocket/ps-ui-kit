import { CSSProperties, Component } from 'react'
import Chart from 'react-apexcharts'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import { ButtonMenuItem, ButtonWithMenu } from './ButtonWithMenu'
import FilterIcon from '@material-ui/icons/FilterList'
import { HGroup } from './Group'

export interface DashboardChartData {
  xAxisType: string
  xData: number[]
  yLabels: string[]
}

interface IProps {
  style?: CSSProperties
  chartId?: string
  data: DashboardChartData
  title?: string
  subtitle?: string
  filterItems?: ButtonMenuItem[]
}

export default class DashboardChart extends Component<IProps> {
  render() {
    const { data, style } = this.props
    const width: string | number = style?.width || 400

    const spark1 = {
      chart: {
        id: this.props.chartId || 'sparkline1',
        group: 'sparklines',
        type: 'area' as const,
        height: 160,
        sparkline: { enabled: true },
      },
      stroke: { curve: 'straight' as const },
      fill: { opacity: 1 },
      series: [
        {
          name: this.props.title || '',
          data: data.xData,
        },
      ],
      labels: data.yLabels,
      yaxis: { min: 0 },
      xaxis: { type: data?.xAxisType || 'datetime' } as { type: 'datetime' },
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
    }

    return (
      <Card style={{ boxShadow: 'none', border: '1px solid #C7C7C7' }}>
        <CardHeader
          action={<HGroup>{this.renderFilterButton()}</HGroup>}
          title={this.props.title}
          subheader={this.props.subtitle}
        />
        <CardContent>
          <Chart type={'area'} options={spark1} series={spark1.series} width={width} />
        </CardContent>
      </Card>
    )
  }

  renderFilterButton() {
    const { filterItems: items } = this.props

    return items?.length ? (
      <div style={{ paddingRight: 5 }}>
        <ButtonWithMenu items={items}>
          <FilterIcon />
        </ButtonWithMenu>
      </div>
    ) : (
      ''
    )
  }
}
