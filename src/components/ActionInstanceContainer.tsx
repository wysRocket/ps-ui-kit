import React, {CSSProperties} from "react";
import NumberedContainer from "./NumberedContainer";
import {IconButton} from "@mui/material";
import * as Styles from "./DefaultStyles";
import {Attribute} from "../domain/Attribute";
import EditIcon from "@mui/icons-material/Edit";
import VisibleIcon from "@mui/icons-material/Visibility";
import InvisibleIcon from "@mui/icons-material/VisibilityOff";
import {HGroup} from "./Group";
import * as Buttons from "./Buttons";

interface IProps {
  style?: CSSProperties;
  number: number;
  canvasId?: string;
  parameters: Attribute[];
  selected?: boolean;
  visible: boolean;
  onVisibilityChange: () => void;
  onEdit: () => void;
  onUpdate: () => void;
  onCanvasClick?: () => void;
}

export default class ActionInstanceContainer extends React.Component<IProps> {
  render() {
    const style: CSSProperties = this.props.style || {width: 546, backgroundColor: "#FAFAFA"};
    if (this.props.selected) {
      style.border = `2px solid ${Styles.Forms.Item.FOCUSED_COLOR}`;
    }
    return (
      <NumberedContainer style={style} number={this.props.number}>
        <div style={{paddingLeft: Styles.Padding.S}}>
          <div style={{display: "flex"}}>
            <div style={{display: "inline-flex"}}>
              <div style={{width: 80}}>{this.renderCanvas()}</div>
            </div>
            <div style={{display: "inline-flex"}}>
              <div
                style={{width: 328, paddingTop: Styles.Padding.S, paddingBottom: Styles.Padding.S}}
              >
                {this.props.parameters.map((p, i) => {
                  return (
                    <HGroup
                      key={i}
                      style={{paddingTop: i === 0 ? 0 : Styles.Padding.S, display: "flex"}}
                    >
                      <div style={{width: 100, color: "#8B8B8B"}}>{p.name}:</div>
                      <div style={{color: "#414141"}}>{p.value}</div>
                    </HGroup>
                  );
                })}
              </div>
            </div>
            <div style={{display: "inline-flex"}}>{this.renderEditButton()}</div>
            <div style={{display: "inline-flex"}}>{this.renderVisibleButton()}</div>
          </div>
        </div>
      </NumberedContainer>
    );
  }

  renderEditButton() {
    if (this.props.selected) {
      return (
        <div>
          <Buttons.Text label={"Done"} onClick={this.props.onUpdate} />
        </div>
      );
    }
    return (
      <div>
        <IconButton onClick={this.props.onEdit} size="large">
          <EditIcon style={{color: Styles.Icon.Button.COLOR}} />
        </IconButton>
      </div>
    );
  }

  renderVisibleButton() {
    if (this.props.selected) {
      return "";
    }
    return (
      <div>
        <IconButton onClick={this.props.onVisibilityChange} size="large">
          {this.props.visible ? (
            <VisibleIcon style={{color: Styles.Icon.Button.COLOR}} />
          ) : (
            <InvisibleIcon style={{color: Styles.Icon.Button.COLOR}} />
          )}
        </IconButton>
      </div>
    );
  }

  renderCanvas() {
    const canvasId = this.props.canvasId;
    if (!canvasId) {
      return "";
    }
    return (
      <div
        style={{width: 50, height: 50, maxWidth: 50, maxHeight: 50, cursor: "pointer"}}
        onClick={this.props.onCanvasClick}
      >
        <canvas id={canvasId} />
      </div>
    );
  }
}
