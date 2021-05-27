import {CSSProperties, default as React} from "react";
import {Paper} from "@material-ui/core";
import ContentHeader from "./ContentHeader";
import Filter from "./Filter";

interface IProps {
  style?: CSSProperties;
  headerElement?: React.ReactNode;
  filter?: string;
  onFilterChange?: (filter: string) => void;
}

export default class GroupsList extends React.Component<IProps> {
  render() {
    return (
      <Paper>
        <ContentHeader>
          {this.renderFilter()}
          {this.props.headerElement}
        </ContentHeader>
      </Paper>
    );
  }

  renderFilter() {
    const handler = this.props.onFilterChange;
    if (handler === undefined) {
      return (<div/>);
    }
    return (
      <div>
        <Filter filter={handler} />
      </div>
    );
  }
}
