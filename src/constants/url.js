import { BASE_URL } from '../helper/axios';

export const ORDER_CREATEORDER = BASE_URL + 'apiorders/createorder';
export const ORDER_GETBYACCOUNTID = (id, query) => BASE_URL + 'ApiOrders/GetByAccountId/' + id + `?status=${query.status}&pageSize=${query.pageSize}`; 
export const ORDER_GETBYID = (id) => BASE_URL + 'ApiOrders/GetById/'+id; 
export const ORDER_CANCELSTATUSORDER = (id) => BASE_URL + 'ApiOrders/CancelStatusOrder/'+id; 
