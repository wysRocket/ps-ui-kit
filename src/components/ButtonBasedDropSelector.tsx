import {find} from "lodash";
import {CSSProperties, default as React} from "react";
import {LabeledItem} from "../domain/Item";
import {ButtonMenuItem, ButtonWithMenu} from "./ButtonWithMenu";
import ExpandIcon from "@mui/icons-material/ExpandMore";

interface IProps {
  style?: CSSProperties;
  items: LabeledItem[];
  variant?: 'text' | 'outlined' | 'contained';
  selected?: any;
  unselectedText?: string;
  onChange: (value: any) => void;
}

export default class ButtonBasedDropSelector extends React.Component<IProps> {

  state = {selected: undefined};

  componentWillMount() {
    this.setState({selected: this.props.selected});
  }

  componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any) {
    this.setState({selected: nextProps.selected});
  }

  onChange = (v: any) => {
    const onChange = this.props.onChange;
    if (onChange !== undefined) {
      this.setState({selected: v}, () => onChange(v));
    }
  }

  render() {
    const items: ButtonMenuItem[] = this.props.items.map((item) => ({
      label: item.label,
      onClick: () => this.onChange(item.value)
    }));
    const selected = find(this.props.items, (item) => item.value === this.state.selected);
    const style = this.props.style || {width: 150};
    return (
      <ButtonWithMenu
        style={{...style, textTransform: 'none'}}
        menuMaxHeight={200}
        variant={this.props.variant}
        endIcon={<ExpandIcon/>}
        items={items}>
        {selected ? selected.label : this.props.unselectedText || 'Select'}
      </ButtonWithMenu>
    );
  }
}
