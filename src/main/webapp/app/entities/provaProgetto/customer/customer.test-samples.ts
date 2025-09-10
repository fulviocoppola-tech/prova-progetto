import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 3366,
  firstName: 'Maddalena',
  lastName: 'Mair',
};

export const sampleWithPartialData: ICustomer = {
  id: 21246,
  firstName: 'Pancrazio',
  lastName: 'Del Gaudio',
};

export const sampleWithFullData: ICustomer = {
  id: 4149,
  firstName: 'Menodora',
  lastName: 'Litterio',
  email: 'Caronte_Palmisani15@yahoo.it',
  phoneNumber: 'where',
};

export const sampleWithNewData: NewCustomer = {
  firstName: 'Gennaro',
  lastName: 'Castellani',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
