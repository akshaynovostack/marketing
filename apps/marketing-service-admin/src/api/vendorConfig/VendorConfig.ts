import { JsonValue } from "type-fest";

export type VendorConfig = {
  configData: JsonValue;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
