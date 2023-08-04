import { InventoryInterface } from 'interfaces/inventory';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SalesInterface {
  id?: string;
  device_id?: string;
  customer_id?: string;
  sales_associate_id?: string;
  created_at?: any;
  updated_at?: any;

  inventory?: InventoryInterface;
  user_sales_customer_idTouser?: UserInterface;
  user_sales_sales_associate_idTouser?: UserInterface;
  _count?: {};
}

export interface SalesGetQueryInterface extends GetQueryInterface {
  id?: string;
  device_id?: string;
  customer_id?: string;
  sales_associate_id?: string;
}
