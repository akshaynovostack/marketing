import { FunnelWhereInput } from "./FunnelWhereInput";
import { FunnelOrderByInput } from "./FunnelOrderByInput";

export type FunnelFindManyArgs = {
  where?: FunnelWhereInput;
  orderBy?: Array<FunnelOrderByInput>;
  skip?: number;
  take?: number;
};
