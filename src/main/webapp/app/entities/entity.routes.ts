import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer',
    data: { pageTitle: 'provaProgettoApp.provaProgettoCustomer.home.title' },
    loadChildren: () => import('./provaProgetto/customer/customer.routes'),
  },
  {
    path: 'order',
    data: { pageTitle: 'provaProgettoApp.provaProgettoOrder.home.title' },
    loadChildren: () => import('./provaProgetto/order/order.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
