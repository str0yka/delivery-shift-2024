type WithRequiredFields<T, Fields extends keyof T> = T & Required<Pick<T, Fields>>;
