import { CSSProperties, Component } from 'react'
import Chart from 'react-apexcharts'
import { Card, CardContent, CardHeader } from '@material-ui/core'

import MoreVertIcon from '@material-ui/icons/MoreVert'
import FilterIcon from '@material-ui/icons/FilterList'
import { ButtonMenuItem, ButtonWithMenu } from './ButtonWithMenu'
import { HGroup } from './Group'

export interface DonutChartItem {
  label: string
  value: number
  color: string
}

interface IProps {
  style?: CSSProperties
  totalLabel?: string
  items: DonutChartItem[]
  title: string
  subtitle?: string
  menuItems?: ButtonMenuItem[]
  filterItems?: ButtonMenuItem[]
}

export default class DonutChart extends Component<IProps> {
  render() {
    const series: number[] = []
    const labels: string[] = []
    const colors: string[] = []

    const { items, style, title, subtitle } = this.props

    items.forEach((item) => {
      series.push(item.value)
      labels.push(item.label)
      colors.push(item.color)
    })
    const options = {
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: { show: true, showAlways: true, label: this.props.totalLabel || 'Total' },
            },
          },
        },
      },
      series,
      labels,
      colors,
      dataLabels: {
        enabled: true,
        formatter: (val: number, opt: { seriesIndex: number; dataPointIndex: number; w: any }) =>
          opt.w.config.series[opt.seriesIndex],
        dropShadow: { enabled: false },
      },
      chart: { type: 'donut' as const },
      responsive: [
        {
          breakpoint: 480,
          options: { chart: { width: 200 }, legend: { position: 'bottom' } },
        },
      ],
    }

    const width: string | number = style?.width || 400

    return (
      <Card style={{ boxShadow: 'none', border: '1px solid #C7C7C7' }}>
        <CardHeader
          action={
            <HGroup>
              {this.renderFilterButton()}
              {this.renderMenuButton()}
            </HGroup>
          }
          title={title}
          subheader={subtitle}
        />
        <CardContent>
          <Chart type={'donut'} width={width} options={options} series={options.series} />
        </CardContent>
      </Card>
    )
  }

  renderMenuButton() {
    const { menuItems: items } = this.props

    return items?.length ? (
      <ButtonWithMenu items={items}>
        <MoreVertIcon />
      </ButtonWithMenu>
    ) : (
      ''
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
