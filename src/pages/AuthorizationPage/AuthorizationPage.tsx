import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '~/components/ui';
import { useAuthOtpMutation, useUsersSigninMutation } from '~/utils/api';
import { LOCAL_STORAGE_KEY, ROUTE } from '~/utils/constants';
import { useUser } from '~/utils/contexts';

import { RetryCode } from './components';

interface AuthorizationFormValues {
  phone: string;
  code: number;
}

export const AuthorizationPage = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const authorizationForm = useForm<AuthorizationFormValues>();

  const authOtpMutation = useAuthOtpMutation();
  const usersSigninMutation = useUsersSigninMutation({
    onSuccess: (data) => {
      localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, data.token);
      setUser(data.user);
      navigate(ROUTE.HOME);
    },
  });

  return (
    <main className="container mt-12">
      <h1 className="text-2xl font-bold">Вход</h1>
      <form
        className="mt-6 flex flex-col gap-6"
        onSubmit={authorizationForm.handleSubmit(({ phone, code }) => {
          if (authOtpMutation.data?.success) {
            usersSigninMutation.mutateAsync({
              data: { phone, code },
            });
          } else {
            authOtpMutation.mutateAsync({
              data: { phone },
            });
          }
        })}
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="flex grow flex-col gap-6">
            {!authOtpMutation.data?.success && (
              <span>Введите номер телефона для входа в личный кабинет</span>
            )}
            {authOtpMutation.data?.success && (
              <span>Введите проверочный код для входа в личный кабинет</span>
            )}
            <Input
              type="number"
              placeholder="Номер телефона"
              disabled={authOtpMutation.isLoading || authOtpMutation.data?.success}
              {...authorizationForm.register('phone', {
                required: {
                  value: true,
                  message: 'Поле является обязательным',
                },
              })}
              {...(authorizationForm.formState.errors.phone && {
                error: !!authorizationForm.formState.errors.phone.message,
                helperText: authorizationForm.formState.errors.phone.message,
              })}
            />
            {authOtpMutation.data?.success && (
              <Input
                type="number"
                placeholder="Проверочный код"
                {...authorizationForm.register('code', {
                  valueAsNumber: true,
                  required: {
                    value: true,
                    message: 'Поле является обязательным',
                  },
                  validate: (value) => {
                    if (value.toString().length !== 6) return 'Код должен содержать 6 цифр';
                    return true;
                  },
                })}
                {...(authorizationForm.formState.errors.code && {
                  error: !!authorizationForm.formState.errors.code.message,
                  helperText: authorizationForm.formState.errors.code.message,
                })}
              />
            )}
          </div>
        </div>
        <Button
          className="w-80 self-start"
          type="submit"
        >
          {authOtpMutation.data?.success ? 'Войти' : 'Продолжить'}
        </Button>
        {authOtpMutation.data?.success && <RetryCode />}
      </form>
    </main>
  );
};
