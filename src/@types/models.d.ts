interface User {
  phone: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  email?: string;
  city?: string;
}

interface DeliveryPoint {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

interface DeliveryPackageType {
  id: string;
  name: string;
  length: number;
  width: number;
  weight: number;
  height: number;
}

interface DeliveryOption {
  id: string;
  price: number;
  days: number;
  name: string;
  type: 'DEFAULT' | 'EXPRESS';
}

interface DeliveryOrder {
  senderPoint: DeliveryPoint;
  senderAddress: {
    street: string;
    house: string;
    appartament: string;
    comment: string;
  };
  sender: {
    street: string;
    house: string;
    appartament: string;
    comment: string;
  };
  receiverPoint: DeliveryPoint;
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
  payer: 'RECEIVER' | 'SENDER';
  status: 0 | 1 | 2 | 3 | 4 | 5;
  cancellable: boolean;
}
