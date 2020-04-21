import {Identity} from "./Identity";
import {Attribute} from "./ZakaCredential";

export enum InitiationType {
  QR = "QR",
  USSD = "USSD",
  BUTTON = "BUTTON",
  INCOMING_PUSH = "INCOMING_PUSH",
  NFC = "NFC",
  PHONE_CALL = "PHONE_CALL",
}

export enum MessageView {
  INLINE = "INLINE",
  WEBVIEW = "WEBVIEW",
  EXTERNAL_BROWSER = "EXTERNAL_BROWSER",
}

/*export interface PushNotificationProperties {
  textTemplate?: string;
  notificationView?: MessageView;
  debug?: boolean;
}*/

export interface Message {
  view: MessageView;
  text: string;
  enabled?: boolean;
}

export enum InteractionFlow {
  PIN = "PIN",
  SIMPLE = "SIMPLE",
  /*PHONE_CALL = "PHONE_CALL",
  RESENFING_INVITE = "RESENFING_INVITE", // WTF RESENFING_INVITE? WTF PHONE_CALL?
  REQUEST_PAYMENT = "REQUEST_PAYMENT",*/
}

export const InteractionFlowsList = [InteractionFlow.PIN, InteractionFlow.SIMPLE/*, InteractionFlow.PHONE_CALL,
  InteractionFlow.RESENFING_INVITE, InteractionFlow.REQUEST_PAYMENT*/];

export interface Parameter {
  name: string;
  defaultValue?: string;
}

export enum ParameterGeneratorType {
  VALUE = 'VALUE',
  LIST = 'LIST',
  RANGE = 'RANGE',
  URL = 'URL',
}

export interface ParameterGenerator {
  type: ParameterGeneratorType;
  values: string[];
}

export interface ParameterInstance {
  name: string;
  generator: ParameterGenerator;
}

export interface ActionInstance extends Identity<string> {
  actionId: string;
  parameters: Attribute[];
  startDate?: Date;
  endDate?: Date;
  frozen?: boolean;
  [key: string]: any;
}

export enum ServiceActionProps {
  ACTION_ID = 'identity',
  ACTION_NAME = 'actionName',
  DESCRIPTION = 'description',
  ONCE_PAER_USER = 'oncePerUser',
  INTERACTION_FLOW = 'interactionFlow',
  FLOW_MESSAGES = 'flowMessages',
  MEDIA_DETAILS = 'mediaDetails',
  CREDENTIALS_REQUIRED = 'credentialsRequired',
  CREDENTIALS_ISSUED = 'credentialsIssued',
  WEBHOOK_URL_TEMPLATE = 'webhookUrlTemplate',
  ENABLED = 'enabled',
  PARAMETERS = 'parameters',
  ICON = 'icon',
}

export const SERVICE_ACTION_PROPS_LIST = [
  ServiceActionProps.ACTION_ID, ServiceActionProps.ACTION_NAME, ServiceActionProps.DESCRIPTION,
  ServiceActionProps.ONCE_PAER_USER, ServiceActionProps.INTERACTION_FLOW, ServiceActionProps.FLOW_MESSAGES,
  ServiceActionProps.MEDIA_DETAILS, ServiceActionProps.CREDENTIALS_REQUIRED, ServiceActionProps.CREDENTIALS_ISSUED,
  ServiceActionProps.WEBHOOK_URL_TEMPLATE, ServiceActionProps.ENABLED, ServiceActionProps.PARAMETERS,
  ServiceActionProps.ICON,
];

export enum FlowMessageType {
  WELCOME = 'welcome',
  SUCCESS = 'success',
  FAILURE = 'failure',
  PENDING = 'pending',
}

export interface Initiation {
  enabled?: boolean;
  [key: string]: any;
}

export interface PhoneInitiation extends Initiation {
  number: string;
}

export interface USSDInitiation extends Initiation {
  insideZaka?: boolean;
  number: string;
}

export interface PushInitiation  extends Initiation {
  whenCredentialsIssued?: boolean;
}

export interface InitiationDetails {
  [key: string]: Initiation;
  /*QR?: Initiation,
  USSD?: USSDInitiation;
  BUTTON?: Initiation;
  PUSH_FROM_SERVER?: PushInitiation;
  PHONE_CALL?: PhoneInitiation;*/
}

export interface ServiceAction extends Identity<string> {
  actionName: string;
  description: string;
  oncePerUser: boolean; // WTF?

  interactionFlow: InteractionFlow;
  flowMessages: {
    welcome?: Message;
    success?: Message;
    failure?: Message;
    pending?: Message;
  };
  mediaDetails: InitiationDetails;
  credentialsRequired: string[];
  credentialsIssued: string[];
  webhookUrlTemplate?: string; // what is template for web hook url?
  enabled: boolean;
  parameters: Parameter[];
  icon?: any;
  iconFile?: File;
  /*versioned?: {
    generationTime: number,
    cacheHexString: boolean
  };*/
  version?: number;
  [key: string]: any;
}
