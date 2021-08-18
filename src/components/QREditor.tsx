import {CSSProperties, default as React} from "react";
import {Button, SwipeableDrawer, TextField} from "@material-ui/core";
import dateFormat from 'dateformat';
import QRIcon from "@material-ui/icons/AspectRatio";
import {BrowserMultiFormatReader, NotFoundException} from "@zxing/library";
import {wait} from "../utils/TimeUtils";
import Panel from "./Panel";
import {Attribute} from "../domain/Attribute";
import * as SchemaDomain from "../domain/SchemaDomain";
import {HGroup} from "./Group";

interface IQRProps {
  opened: boolean;
  onClose: () => void;
  onResult: (code: string) => void;
}

class QRScanner extends React.Component<IQRProps> {
  state = {
    selectedCamera: '',
    cameras: [],
  };

  private codeReader: BrowserMultiFormatReader  = new BrowserMultiFormatReader();

  async componentWillMount() {
    await this.initCameras(this.props);
  }

  async componentWillReceiveProps(nextProps: Readonly<IQRProps>, nextContext: any) {
    await this.initCameras(nextProps);
  }

  async initCameras(props: IQRProps) {
    if (!props.opened) {
      return;
    }

    try {
      const cameras = await this.codeReader.listVideoInputDevices();
      const selectedCamera = cameras.length ? cameras[0].deviceId : '';
      this.setState({cameras, selectedCamera}, () => this.startScanning());
    } catch (err) {
      alert(`Error! ${err.message}`);
    }
  }

  async startScanning() {
    this.codeReader.reset();
    await wait(1000);
    if (!this.props.opened) {
      return;
    }
    try {
      await this.codeReader.decodeFromVideoDevice(this.state.selectedCamera, 'qr-video', (result, err) => {
        if (result) {
          console.log(result);
          this.codeReader.reset();
          this.props.onResult(result.getText());
        }
        if (err && !(err instanceof NotFoundException)) {
          console.error(err);
          this.codeReader.reset();
        }
      });
    } catch (err) {
      console.log(err);
      this.codeReader.reset();
    }
    /*const result = await this.codeReader.decodeOnceFromVideoDevice(this.state.selectedCamera, 'qr-video');
    this.props.onResult(result.getText());*/
  }

  onCameraChange = (evt: any) => {
    const sourceSelect: HTMLSelectElement|null = document.getElementById("sourceSelect") as HTMLSelectElement;
    if (sourceSelect) {
      this.setState({selectedCamera: sourceSelect.value}, () => this.startScanning());
    }
  }

  onClose = () => {
    this.codeReader.reset();
    this.props.onClose();
  }

  onOpen = () => {
    console.log('opened');
  }

  render() {
    const width = Math.min(document.documentElement.clientWidth, window.innerWidth, window.screen.availWidth) - 100;
    const height = Math.min(document.documentElement.clientHeight, window.innerHeight, window.screen.availHeight - 100);
    return (
      <SwipeableDrawer
        anchor={'left'}
        open={this.props.opened}
        onClose={this.onClose}
        onOpen={this.onOpen}
        disableSwipeToOpen={true}
        SwipeAreaProps={{width, height}}
      >
        <Panel style={{width, height}}>
          <div style={{paddingLeft: 32, paddingTop: 32, paddingRight: 32, width: width - 64, height: height - 64}}>
            <div>
              <video
                id="qr-video"
                width={width - 64}
                height={height - 120}
                style={{border: "1px solid gray"}}
              />
            </div>
            <div>
              <select id="sourceSelect" style={{maxWidth: 400}} onChange={this.onCameraChange}>
                {this.state.cameras.map((c: any, i) => {
                  return (<option key={i} value={c.deviceId}>{c.label}</option>);
                })}
              </select>
            </div>
          </div>
        </Panel>
      </SwipeableDrawer>
    );
  }
}

interface IProps {
  key?: any;
  style?: CSSProperties;
  attribute: Attribute;
  type?: SchemaDomain.AttributeType;
  disabled?: boolean;
  onChange: (newAttr: Attribute) => void;
  textEditable?: boolean;
}

export class QREditor extends React.Component<IProps> {

  state = {
    // value: '',
    popUpOpened: false,
  };

  /*componentWillMount(): void {
    this.setState({value: this.props.attribute.value});
  }

  componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
    this.setState({value: nextProps.attribute.value});
  }*/

  onPopUpOpen = () => {
    this.setState({popUpOpened: true});
  }

  onPopUpClose = () => {
    this.setState({popUpOpened: false});
  }

  onResult = (value: string) => {
    this.setState({popUpOpened: false}, () => this.props.onChange({name: this.props.attribute.name, value}));
  }

  onTextChange = (evt: any) => {
    if (!this.props.textEditable) {
      return;
    }
    const value = evt.target.value;
    this.props.onChange({name: this.props.attribute.name, value});
    // this.setState({value}, () => this.props.onChange({name: this.props.attribute.name, value}));
  }

  render() {
    const style = this.props.style || {width: 360};
    const width: any = style.width || '100%';
    const tfWidth = typeof width === 'number' ? width - 80 : `calc(${width}-80)`;
    const attribute = this.props.attribute;
    return (
      <div>
        <QRScanner opened={this.state.popUpOpened} onClose={this.onPopUpClose} onResult={this.onResult}/>
        <div style={style}>
          <HGroup style={{display: 'flex'}}>
            <div>
              <TextField
                type={'text'}
                style={{width: tfWidth}}
                value={attribute.value}
                inputProps={{style: {paddingTop: 0, paddingBottom: 0, height: 32}}}
                InputLabelProps={{style: {paddingTop: 0, paddingBottom: 0, height: 32}}}
                onChange={this.props.textEditable ? this.onTextChange : undefined}
                variant="outlined"
                contentEditable={!!this.props.textEditable}
              />
            </div>
            <div style={{paddingLeft: 16}}>
              <Button onClick={this.onPopUpOpen} style={{paddingTop: 3, paddingBottom: 3}} disabled={this.props.disabled} variant={'outlined'}>
                <QRIcon/>
              </Button>
            </div>
          </HGroup>
        </div>
      </div>
    );
  }
}
