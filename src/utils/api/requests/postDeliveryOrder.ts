import type { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

export interface PostDeliveryOrderRequestBody {
  senderPoint: {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
  };
  senderAddress: {
    street: string;
    house: string;
    appartament: string;
    comment: string;
  };
  sender: {
    firstname: string;
    lastname: string;
    middlename: string;
    phone: string;
  };
  receiverPoint: {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
  };
  receiverAddress: {
    street: string;
    house: string;
    appartament: string;
    comment: string;
  };
  receiver: {
    firstname: string;
    lastname: string;
    middlename: string;
    phone: string;
  };
  payer: 'RECEIVER';
  option: {
    id: string;
    price: number;
    days: number;
    name: string;
    type: string;
  };
}

export type PostDeliveryOrderSuccessResponse = {
  success: true;
  order: DeliveryOrder;
};

export type PostDeliveryOrderFailureResponse = {
  success: false;
  reason: string;
};

export const postDeliveryOrder = async (
  data: PostDeliveryOrderRequestBody,
  config?: AxiosRequestConfig<PostDeliveryOrderRequestBody>,
) =>
  api
    .post<PostDeliveryOrderSuccessResponse>('/delivery/order', data, config)
    .then((res) => res.data);
