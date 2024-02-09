import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAuthOtpMutation, useUsersSigninMutation } from '~/utils/api';
import { LOCAL_STORAGE_KEY, ROUTE } from '~/utils/constants';
import { useUser } from '~/utils/contexts';

interface AuthorizationFormValues {
  phone: string;
  code: number;
}

export const useAuthorizationPage = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [retryDelay, setRetryDelay] = useState<number | null>(null);

  const authorizationForm = useForm<AuthorizationFormValues>();

  const authOtpMutation = useAuthOtpMutation({
    onSuccess: (data) => {
      setRetryDelay(data.retryDelay);
    },
  });
  const usersSigninMutation = useUsersSigninMutation({
    onSuccess: (data) => {
      localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, data.token);
      setUser(data.user);
      navigate(ROUTE.HOME);
    },
  });

  const onSubmit = authorizationForm.handleSubmit(({ phone, code }) => {
    if (authOtpMutation.data?.success) {
      usersSigninMutation.mutateAsync({
        data: { phone, code },
      });
    } else {
      authOtpMutation.mutateAsync({
        data: { phone },
      });
    }
  });

  const onRetryCode = () =>
    authOtpMutation.mutateAsync({
      data: {
        phone: authorizationForm.getValues('phone'),
      },
    });

  return {
    state: {
      retryDelay,
      authorizationForm,
      authOtpMutation,
      usersSigninMutation,
    },
    functions: {
      setUser,
      setRetryDelay,
      onSubmit,
      onRetryCode,
    },
  };
};
