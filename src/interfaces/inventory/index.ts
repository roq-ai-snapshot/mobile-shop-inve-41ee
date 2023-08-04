import { PurchaseHistoryInterface } from 'interfaces/purchase-history';
import { SalesInterface } from 'interfaces/sales';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  device_name: string;
  status: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  purchase_history?: PurchaseHistoryInterface[];
  sales?: SalesInterface[];
  organization?: OrganizationInterface;
  _count?: {
    purchase_history?: number;
    sales?: number;
  };
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  device_name?: string;
  status?: string;
  organization_id?: string;
}
