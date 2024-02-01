type ApiFailureResponse = {
  success: false;
  reason: string;
};

type ApiSuccessResponse<T = never> = { success: true } & T;

type ApiResponse<T = never> = ApiFailureResponse | ApiSuccessResponse<T>;
