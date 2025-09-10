import dayjs from 'dayjs/esm';
import { ICustomer } from 'app/entities/provaProgetto/customer/customer.model';

export interface IOrder {
  id: number;
  orderDate?: dayjs.Dayjs | null;
  totalAmount?: number | null;
  customer?: ICustomer | null;
}

export type NewOrder = Omit<IOrder, 'id'> & { id: null };
