import {Attribute} from "./Attribute";
import {find} from "lodash";

export enum AttributeType {
  TEXT = 'text',
  DATE = 'date',
  PHONE = 'phone',
  NUMBER = 'number',
  FILE = 'file',
  CUSTOM_TYPE = 'custom enum',
}

export const attributeTypeToString = (type: AttributeType) => {
  if (type === AttributeType.DATE) {
    return 'Date';
  }
  if (type === AttributeType.TEXT) {
    return 'Text';
  }
  if (type === AttributeType.NUMBER) {
    return 'Number';
  }
  if (type === AttributeType.CUSTOM_TYPE) {
    return 'Custom type';
  }
  return type;
};

export type AttributeSource = 'QR' | 'NFC';

export interface AttributeEnumValue extends Attribute {
  description?: string;
}

export interface SchemaAttribute {
  name: string;
  type: AttributeType;
  description: string;
  valueSources?: AttributeSource[];
  enumValues?: AttributeEnumValue[];
}

export const attributeValueToDate = (value: string, type: AttributeType) => {
  const ts = parseInt(value, 10);
  if (isNaN(ts)) {
    return new Date(0);
  }
  if (type === AttributeType.DATE) {
    // FIXME: hack for onfido seconds:
    if (ts > 2147483647) {
      return new Date(ts);
    }
    return new Date(parseInt(value, 10) * 1000);
  }

  return new Date(ts);
};

export const dateToAttributeValue = (date: Date, type: AttributeType) => {
  if (type === AttributeType.DATE) {
    return Math.floor(date.getTime() / 1000).toString(10);
  }

  return date.getTime().toString(10);
};

export const enumAttributeToString = (attr: SchemaAttribute, value: string) => {
  const ev = find(attr.enumValues, (v) => v.value === value);
  if (!ev) {
    return value;
  }
  return enumValueToString(ev);
};

export const enumValueToString = (ev: AttributeEnumValue) => {
  const parts = [ev.name, ev.description].filter((s) => s);
  return parts.join(' - ');
};
