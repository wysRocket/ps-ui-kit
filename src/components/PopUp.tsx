import {CSSProperties, default as React} from "react";
import {Dialog, DialogTitle, IconButton, Typography} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import ContentHeader from "./ContentHeader";

interface IProps {
  style?: CSSProperties;
  title: string;
  opened: boolean;
  onClose: () => void;
  children?: any;
  minWidth?: number;
  disableBackdropClick?: boolean;
  headerChildren?: any;
}

export default class PopUp extends React.Component<IProps> {
  render() {
    return (
      <Dialog
        maxWidth={false}
        PaperProps={{style: {borderRadius: 5}}}
        onClose={this.props.onClose}
        open={this.props.opened}
        disableBackdropClick={this.props.disableBackdropClick}
      >
        <div style={{paddingLeft: 32, paddingRight: 32}}>
          <ContentHeader style={{minWidth: this.props.minWidth || 700}}>
            <Typography variant="h6">{this.props.title}</Typography>
            {this.props.headerChildren}
            <IconButton onClick={this.props.onClose}>
              <CloseIcon />
            </IconButton>
          </ContentHeader>
        </div>
        <div>
          {this.props.children}
        </div>
      </Dialog>
    );
  }
}
