import { VendorConfig as TVendorConfig } from "../api/vendorConfig/VendorConfig";

export const VENDORCONFIG_TITLE_FIELD = "name";

export const VendorConfigTitle = (record: TVendorConfig): string => {
  return record.name?.toString() || String(record.id);
};
