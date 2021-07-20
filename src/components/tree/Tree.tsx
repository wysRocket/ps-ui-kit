import {isEqual} from "lodash";
import {CSSProperties, default as React} from "react";
import {TreeItem, TreeView} from "@material-ui/lab";
import {Checkbox, Collapse, SvgIcon, SvgIconProps} from "@material-ui/core";
import {TransitionProps} from "@material-ui/core/transitions";
import {useSpring, animated} from "react-spring";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

interface TreeCheckBoxProps {
  selected: boolean;
  onSelectionChange: (selected: boolean) => void;
}

class TreeCheckbox extends React.Component<TreeCheckBoxProps> {
  checkboxHandler = () => {
    this.props.onSelectionChange(!this.props.selected);
  }

  render() {
    return (
      <Checkbox
        checked={this.props.selected}
        onChange={this.checkboxHandler}
        style={{padding: 0, width: 32, height: 32}}
        icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 20, color: 'rgba(158, 158, 158, 1)'}} />}
        checkedIcon={<CheckBoxIcon style={{ fontSize: 20, color: 'rgba(158, 158, 158, 1)'}} />}
      />
    );
  }
}

type TValue = string | number;

export interface TreeElement {
  content: TreeContent;
  children?: TreeElement[];
}

export interface TreeContent {
  label: string;
  value: TValue;
}

interface ITreeItemProps {
  key?: any;
  element: TreeElement;
  selected: boolean;
  onSelectionChange?: (value: TValue, selected: boolean) => void;
}

class TreeNodeItem extends React.Component<ITreeItemProps> {
  onSelectionChange = (selected: boolean) => {
    if (this.props.onSelectionChange !== undefined) {
      this.props.onSelectionChange(this.props.element.content.value, selected);
    }
  }

  onClick = () => {
    this.onSelectionChange(!this.props.selected);
  }

  render() {
    const element = this.props.element;
    const content = element.content;
    return (
      <TreeItem
        onClick={this.onClick}
        nodeId={content.value.toString()}
        label={content.label}
        collapseIcon={<MinusSquare/>}
        expandIcon={<PlusSquare/>}
        endIcon={(<TreeCheckbox selected={this.props.selected} onSelectionChange={this.onSelectionChange}/>)}
        TransitionComponent={TransitionComponent}/>
    );
  }
}

function getExpandedValues(elements: TreeElement[], selectedSet: Set<TValue>): TValue[] {
  const resultSet: Set<TValue> = new Set<TValue>();
  const findExpanded = (e: TreeElement) => {
    let r = false;
    if (selectedSet.has(e.content.value)) {
      r = true;
    }
    if (!e.children) {
      return r;
    }
    e.children.forEach((c) => {
      if (findExpanded(c)) {
        resultSet.add(e.content.value);
        r = true;
      }
    });
    return r;
  };
  elements.forEach(findExpanded);
  return [...resultSet.keys()];
}

interface IProps {
  style?: CSSProperties;
  selected?: TValue[];
  expandSelected?: boolean;
  elements: TreeElement[];
  isLoading?: boolean;
  onSelect: (terminalIds: TValue[]) => void;
}

interface IState {
  selected?: TValue[];
  defaultExpanded: string[];
}

export class Tree extends React.Component<IProps, IState> {

  state = {
    selected: [],
    defaultExpanded: []
  };

  createMapFromProps = (props: IProps) => {
    const selected: TValue[] = props.selected || [];
    const selectedSet = new Set<TValue>(selected);
    const terminalSet = new Set<TValue>();
    const handleElement = (element: TreeElement) => {
      if (!element.children) {
        terminalSet.add(element.content.value);
      } else {
        element.children.forEach(handleElement);
      }
    };

    props.elements.forEach(handleElement);

    // FIXME: hack for "only last version" and "privacy" consistency
    selected.forEach((c) => {
      if (!terminalSet.has(c)) {
        selectedSet.delete(c);
      }
    });
    const newState: any = {selected: [...selectedSet.keys()]};
    if (!isEqual(this.state.selected, props.selected)) {
      const defaultExpanded = props.expandSelected ?
        getExpandedValues(props.elements, selectedSet).map((v) => v.toString()) : [];
      newState.defaultExpanded = defaultExpanded;
    }
    this.setState(newState);
  }

  componentWillMount(): void {
    this.createMapFromProps(this.props);
  }

  componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
    this.createMapFromProps(nextProps);
  }

  render() {
    const elements = this.props.elements;
    const selectedSet = new Set<TValue>(this.state.selected);
    return (
      <TreeView
        style={{textAlign: 'left'}}
        defaultExpanded={this.state.defaultExpanded}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
      >
        {elements.map((e, i) => {
          return this.renderElement(e, selectedSet, i);
        })}
      </TreeView>
    );
  }

  onSelectionChange = (value: TValue, s: boolean) => {
    const selectedSet = new Set<TValue>(this.state.selected);
    if (s) {
      selectedSet.add(value);
    } else {
      selectedSet.delete(value);
    }
    const selected = [...selectedSet.keys()];
    this.setState({selected}, () => this.props.onSelect(selected));
  }

  renderElement(element: TreeElement, selectedSet: Set<string|number>, key: any) {
    const content = element.content;
    if (!element.children) {
      return (
        <TreeNodeItem key={key} selected={selectedSet.has(content.value)} element={element} onSelectionChange={this.onSelectionChange}/>
      );
    } else {
      return (
        <TreeItem key={key} nodeId={content.value.toString()} label={content.label}>
          {element.children.map((e, index) => {
            return this.renderElement(e, selectedSet, index);
          })}
        </TreeItem>
      );
    }
  }
}
