import { Button, Input } from '~/components/ui';

import { RetryCode } from './components';
import { useAuthorizationPage } from './hooks';

export const AuthorizationPage = () => {
  const { state, functions } = useAuthorizationPage();

  return (
    <main className="container mt-12">
      <h1 className="text-2xl font-bold">Вход</h1>
      <form
        className="mt-6 flex flex-col gap-6"
        onSubmit={functions.onSubmit}
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="flex grow flex-col gap-6">
            {!state.authOtpMutation.data?.success && (
              <span>Введите номер телефона для входа в личный кабинет</span>
            )}
            {state.authOtpMutation.data?.success && (
              <span>Введите проверочный код для входа в личный кабинет</span>
            )}
            <Input
              type="number"
              placeholder="Номер телефона"
              disabled={state.authOtpMutation.isLoading || state.authOtpMutation.data?.success}
              {...state.authorizationForm.register('phone', {
                required: {
                  value: true,
                  message: 'Поле является обязательным',
                },
              })}
              {...(state.authorizationForm.formState.errors.phone && {
                error: !!state.authorizationForm.formState.errors.phone.message,
                helperText: state.authorizationForm.formState.errors.phone.message,
              })}
            />
            {state.authOtpMutation.data?.success && (
              <Input
                type="number"
                placeholder="Проверочный код"
                {...state.authorizationForm.register('code', {
                  valueAsNumber: true,
                  required: {
                    value: true,
                    message: 'Поле является обязательным',
                  },
                  min: 0,
                  max: 999999,
                  validate: (value) => {
                    if (value.toString().length !== 6) return 'Код должен содержать 6 цифр';
                    return true;
                  },
                })}
                {...(state.authorizationForm.formState.errors.code && {
                  error: !!state.authorizationForm.formState.errors.code.message,
                  helperText: state.authorizationForm.formState.errors.code.message,
                })}
              />
            )}
          </div>
        </div>
        <Button
          className="w-80 self-start"
          type="submit"
        >
          {state.authOtpMutation.data?.success ? 'Войти' : 'Продолжить'}
        </Button>
        {state.authOtpMutation.data?.success && (
          <RetryCode
            retryDelay={state.retryDelay}
            onRetry={functions.onRetryCode}
          />
        )}
      </form>
    </main>
  );
};
