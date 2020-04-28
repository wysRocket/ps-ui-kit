import {CSSProperties, default as React} from "react";
import Chart from 'react-apexcharts';
import {Button, Card, CardContent, CardHeader, IconButton} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';

interface IProps {
  style?: CSSProperties;
}

export default class DonutChart extends React.Component<IProps> {
  render() {
    const options = {
      series: [0, 17, 56],
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
      <Card>
        <CardHeader
          action={
            <Button variant={'outlined'} style={{width: 32, height: 32, minWidth: 32}}>
              <MoreVertIcon />
            </Button>
          }
          title="Sign up"
          subheader="Button"
        />
        <CardContent>
          <Chart type={'donut'} width={width} options={options} series={[0, 17, 15]}/>
        </CardContent>
      </Card>
    );
  }
}
