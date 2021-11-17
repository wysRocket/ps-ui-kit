import {CSSProperties, default as React} from "react";
import * as Style from "./DefaultStyles";
import {Attribute} from "../domain/Attribute";
import * as SchemaDomain from "../domain/SchemaDomain";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as AttributeComponent from "./AttributeComponent";

export interface AttributeFieldValue {
  attribute: Attribute;
  schemaField: SchemaDomain.SchemaAttribute;
}

interface IProps {
  style?: CSSProperties;
  attributeNameStyle?: CSSProperties;
  attributeValueStyle?: CSSProperties;
  useColon?: boolean;
  attributes: AttributeFieldValue[];
  header: string;
  icon?: React.ReactNode;
}

export default class ExpandedAttributesList extends React.Component<IProps> {
  state = {
    expanded: false
  };

  onExpandChange = () => this.setState({expanded: !this.state.expanded});

  render() {
    const attrsNum = this.props.attributes.length;
    const style = this.props.style || {};
    return (
      <Accordion
        style={{...style, paddingRight: Style.Padding.L, boxShadow: 'none', border: `1px solid ${Style.Table.Color.BORDER}`, backgroundColor: '#FAFAFA'}}
        expanded={this.state.expanded}
        onChange={this.onExpandChange}
      >
        <AccordionSummary style={{width: '100%'}} expandIcon={<ExpandMoreIcon />}>
          <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
            <div style={{display: 'inline-flex'}}>
              {this.renderIcon()}
            </div>
            <div style={{display: 'inline-flex'}}>
              <div>{this.props.header}</div>
            </div>
            <div style={{flexGrow: 1}} />
            <div style={{display: 'inline-flex'}}>
              <div>{`${attrsNum} ${attrsNum % 10 === 1 ? 'attribute' : 'attributes'}`}</div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails style={{width: '100%'}}>
          <div style={{width: '100%'}}>
            {this.props.attributes.map((a, i) => {
              return (
                <AttributeComponent.Viewer
                  style={{paddingTop : i > 0 ? Style.Padding.S : 0}}
                  nameStyle={this.props.attributeNameStyle}
                  valueStyle={this.props.attributeValueStyle}
                  useColon={this.props.useColon}
                  key={i}
                  attribute={a.attribute}
                  schemaAttribute={a.schemaField}
                />
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    );
  }

  renderIcon() {
    if (!this.props.icon) {
      return '';
    }
    return (
      <div style={{
        width: Style.Padding.L,
        height: Style.Padding.L,
        backgroundColor: '#E7E7E7',
        border: '1px solid rgba(199, 199, 199, 1.0)',
        borderRadius: 3,
        marginRight: Style.Padding.S
      }}>
        {this.props.icon}
      </div>
    );
  }
}
