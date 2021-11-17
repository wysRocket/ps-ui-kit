import {CSSProperties, default as React} from "react";
import * as Style from "./DefaultStyles";
import {Attribute} from "../domain/Attribute";
import * as SchemaDomain from "../domain/SchemaDomain";
import dateFormat from "dateformat";
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {LabeledItem} from "../domain/Item";
import {PrettyDropSelector} from "./DropSelector";
import {TextField} from "@material-ui/core";
import {QREditor} from "./QREditor";

interface IViewProps {
  style?: CSSProperties;
  nameStyle?: CSSProperties;
  valueStyle?: CSSProperties;
  useColon?: boolean;
  attribute: Attribute;
  schemaAttribute: SchemaDomain.SchemaAttribute;
}

const getAttributeValue = (props: IViewProps) => {
  const schemaAttribute = props.schemaAttribute;
  let result = props.attribute.value;
  if (schemaAttribute.type === SchemaDomain.AttributeType.DATE && result && !isNaN(parseInt(result, 10))) {
    result = dateFormat(SchemaDomain.attributeValueToDate(result, schemaAttribute.type), 'yyyy-mm-dd\'T\'HH:MM:ss');
  }
  if (schemaAttribute.enumValues && schemaAttribute.enumValues.length) {
    result = SchemaDomain.enumAttributeToString(schemaAttribute, result);
  }
  const parts = result.split(/\r?\n/g);
  const style = props.valueStyle || {};
  return (
    <div style={{...style}}>
      {parts.map((p) => (<div>{p}</div>))}
    </div>
  );
};

export class Viewer extends React.Component<IViewProps> {

  render() {
    const style = this.props.style || {};
    return (
      <div style={{...style, display: 'flex'}}>
        <div style={{display: 'inline-flex'}}>
          <div style={this.props.nameStyle}>
            {this.props.attribute.name}{this.props.useColon ? ':' : ''}
          </div>
        </div>
        <div style={{flexGrow: 1}} />
        <div style={{display: 'inline-flex'}}>
          {getAttributeValue(this.props)}
        </div>
      </div>
    );
  }
}

export class BoxedViewer extends React.Component<IViewProps> {
  render() {
    const defStyle: CSSProperties = {padding: 15, overflow: 'auto', backgroundColor: '#FAFAFA', border: '1px solid #E3E4E5', borderRadius: 4};
    const style = this.props.style || {};
    return (
      <div style={{...defStyle, ...style, }}>
        <Viewer {...this.props}/>
      </div>
    );
  }
}

const labelFunc = (date: any, invalidLabel: string) => {
  return dateFormat(date, 'yyyy-mm-dd\'T\'HH:MM:ss');
};

interface IEditProps extends IViewProps {
  numRows?: number;
  disableQrText?: boolean;
  onChange: (attribute: Attribute) => void;
}

export class SimpleEditor extends React.Component<IEditProps> {
  onChange = (value: string) => {
    this.props.onChange({name: this.props.attribute.name, value});
  }

  onTextChange = (evt: any) => {
    this.onChange(evt.target.value);
  }

  onDateChanged = (newVal: Date | null) => {
    this.onChange(newVal ? SchemaDomain.dateToAttributeValue(newVal, this.props.schemaAttribute.type) : '');
  }

  onDropDownChange = (newVal: any) => {
    this.onChange(newVal);
  }

  render() {
    const style = this.props.style || {width: 360};
    const {attribute, schemaAttribute} = this.props;
    if (schemaAttribute.type === SchemaDomain.AttributeType.DATE) {
      const value = attribute.value ? SchemaDomain.attributeValueToDate(attribute.value, schemaAttribute.type) : null;
      return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            style={style}
            clearable={true}
            value={value}
            labelFunc={labelFunc}
            onChange={this.onDateChanged}
            inputProps={{style: {paddingTop: 0, paddingBottom: 0, height: 32}}}
            InputProps={{style: {paddingTop: 0, paddingBottom: 0, height: 32}}}
            inputVariant="outlined"
          />
        </MuiPickersUtilsProvider>
      );
    }
    if (schemaAttribute.enumValues && schemaAttribute.enumValues.length) {
      const items: LabeledItem[] = schemaAttribute.enumValues.map((ev) =>
        ({label: SchemaDomain.enumValueToString(ev), value: ev.value}));
      const selected = attribute.value;
      return (
        <PrettyDropSelector style={style} items={items} onChange={this.onDropDownChange} selected={selected}/>
      );
    }
    if (schemaAttribute.valueSources && schemaAttribute.valueSources.indexOf('QR') >= 0) {
      return (
        <QREditor attribute={attribute} onChange={this.props.onChange} textEditable={!this.props.disableQrText}/>
      );
    }
    const multiline = schemaAttribute.type === SchemaDomain.AttributeType.TEXT && schemaAttribute.multiline;
    const inputStyle = multiline ? {paddingTop: 4, paddingBottom: 4} : {paddingTop: 0, paddingBottom: 0, height: 32};
    const numRows = multiline ? (this.props.numRows || 10) : 1;
    return (
      <TextField
        type={schemaAttribute.type === SchemaDomain.AttributeType.NUMBER ? 'number' : 'text'}
        style={style}
        multiline={multiline}
        rows={numRows}
        value={attribute.value}
        onChange={this.onTextChange}
        inputProps={{style: inputStyle}}
        InputProps={{style: inputStyle}}
        variant="outlined"
      />
    );
  }
}

export class Editor extends React.Component<IEditProps> {
  render() {
    const attribute = this.props.attribute;
    return (
      <div>
        <div style={{paddingBottom: Style.Padding.XS}}>{attribute.name}</div>
        <div>
          <SimpleEditor
            numRows={this.props.numRows}
            onChange={this.props.onChange}
            attribute={this.props.attribute}
            schemaAttribute={this.props.schemaAttribute}
          />
        </div>
      </div>
    );
  }
}
