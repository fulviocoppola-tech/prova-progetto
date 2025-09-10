import dayjs from 'dayjs/esm';

import { IOrder, NewOrder } from './order.model';

export const sampleWithRequiredData: IOrder = {
  id: 26110,
  orderDate: dayjs('2025-09-10'),
  totalAmount: 8208.2,
};

export const sampleWithPartialData: IOrder = {
  id: 19840,
  orderDate: dayjs('2025-09-10'),
  totalAmount: 6042.31,
};

export const sampleWithFullData: IOrder = {
  id: 27813,
  orderDate: dayjs('2025-09-10'),
  totalAmount: 7491.96,
};

export const sampleWithNewData: NewOrder = {
  orderDate: dayjs('2025-09-10'),
  totalAmount: 21113.49,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
