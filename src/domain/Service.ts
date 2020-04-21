import {Identity} from "./Identity";

export interface Service extends Identity<string> {
  description: string;
  shortDescription: string;
  did: string;
  enabled: boolean;
  logo?: any;
  logoFile?: File;
  categories: string[];
  countries: string[];
  keywords: string[];
  endpoint: string;
  lastTouch: string;
  [key: string]: any;
}
