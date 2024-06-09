import { VendorConfigWhereInput } from "./VendorConfigWhereInput";
import { VendorConfigOrderByInput } from "./VendorConfigOrderByInput";

export type VendorConfigFindManyArgs = {
  where?: VendorConfigWhereInput;
  orderBy?: Array<VendorConfigOrderByInput>;
  skip?: number;
  take?: number;
};
