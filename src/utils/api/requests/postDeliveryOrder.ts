import { AxiosRequestConfig } from 'axios';

import { api } from '../instance';

interface PostDeliveryOrderRequestBody {
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

type PostDeliveryOrderResponse =
  | {
      success: false;
      reason: string;
    }
  | {
      success: true;
      order: DeliveryOrder;
    };

export const postDeliveryOrder = async (
  data: PostDeliveryOrderRequestBody,
  config?: AxiosRequestConfig<PostDeliveryOrderRequestBody>,
) =>
  api.post<PostDeliveryOrderResponse>(
    `${import.meta.env.VITE_API_URL}/delivery/order`,
    data,
    config,
  );
