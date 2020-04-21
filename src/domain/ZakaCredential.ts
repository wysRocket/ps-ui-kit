import {Identity} from "./Identity";

export interface Attribute {
  name: string;
  value: string;
}

export enum TrustLevel {
  SELF_ATTESTED = 0,
  SERVICE_ATTESTED = 1,
  TRUSTED_SERVICE_ATTESTED = 2,
}

const createMap = () => {
  const res = new Map<string, TrustLevel>();
  res.set('SELF_ATTESTED', TrustLevel.SELF_ATTESTED);
  res.set('SERVICE_ATTESTED', TrustLevel.SERVICE_ATTESTED);
  res.set('TRUSTED_SERVICE_ATTESTED', TrustLevel.TRUSTED_SERVICE_ATTESTED);
  return res;
};

export const TRUST_LEVEL_MAP = createMap();

export const trustLevelToString = (trustLevel: TrustLevel) => {
  if (trustLevel === TrustLevel.SERVICE_ATTESTED) {
    return 'SERVICE_ATTESTED';
  } else if (trustLevel === TrustLevel.TRUSTED_SERVICE_ATTESTED) {
    return 'TRUSTED_SERVICE_ATTESTED';
  }
  return 'SELF_ATTESTED';
};

export interface ZakaCredential extends Identity<string> {
  ownerDid?: string;
  schemaId: string;
  schemaName: string;
  supportRevocation?: boolean;
  trustLevel?: TrustLevel;
}

export interface ZakaCredentialValue {
  name: string;
  description?: string;
  credId: string;
  attributes: Attribute[];
}
