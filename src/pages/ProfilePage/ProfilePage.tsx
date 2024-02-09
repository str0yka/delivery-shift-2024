import { useForm } from 'react-hook-form';

import { Button, Input } from '~/components/ui';
import { useUsersProfileMutation } from '~/utils/api';
import { useUser } from '~/utils/contexts';

interface UserProfileFormValues {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  city: string;
}

export const ProfilePage = () => {
  const { user } = useUser();

  const userProfileForm = useForm<UserProfileFormValues>({
    defaultValues: { ...user },
  });

  const usersProfileMutation = useUsersProfileMutation();

  return (
    <main className="container mt-12">
      <h1 className="text-2xl font-bold">Профиль</h1>
      <form
        className="mt-6 flex flex-col gap-6"
        onSubmit={userProfileForm.handleSubmit((values) =>
          usersProfileMutation.mutateAsync({
            data: {
              phone: user!.phone,
              profile: values,
            },
          }),
        )}
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="flex grow flex-col gap-6">
            <Input
              label="Фамилия"
              placeholder="Фамилия"
              disabled={usersProfileMutation.isLoading}
              {...userProfileForm.register('lastname', {
                pattern: {
                  value: /[a-zA-Zа-яА-Я\s`‘-]/g,
                  message: 'Некорректный формат',
                },
                maxLength: 60,
                validate: (value) => {
                  if (
                    value !== value.replace(/[a-zA-Z]/g, '') &&
                    value !== value.replace(/[а-яА-Я]/g, '')
                  ) {
                    return 'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского';
                  }
                  if (
                    value.at(0)?.replace(/[a-zA-Zа-яА-Я]/g, '') ||
                    value.at(-1)?.replace(/[a-zA-Zа-яА-Я]/g, '')
                  ) {
                    return 'Некорректный формат';
                  }

                  return true;
                },
              })}
            />
            <Input
              label="Имя"
              placeholder="Имя"
              disabled={usersProfileMutation.isLoading}
              {...userProfileForm.register('firstname', {
                pattern: {
                  value: /[a-zA-Zа-яА-Я\s`‘-]/g,
                  message: 'Некорректный формат',
                },
                maxLength: 60,
                validate: (value) => {
                  if (
                    value !== value.replace(/[a-zA-Z]/g, '') &&
                    value !== value.replace(/[а-яА-Я]/g, '')
                  ) {
                    return 'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского';
                  }
                  if (
                    value.at(0)?.replace(/[a-zA-Zа-яА-Я]/g, '') ||
                    value.at(-1)?.replace(/[a-zA-Zа-яА-Я]/g, '')
                  ) {
                    return 'Некорректный формат';
                  }

                  return true;
                },
              })}
            />
            <Input
              label="Отчество"
              placeholder="Отчество"
              disabled={usersProfileMutation.isLoading}
              {...userProfileForm.register('middlename', {
                pattern: {
                  value: /[a-zA-Zа-яА-Я\s`‘-]/g,
                  message: 'Некорректный формат',
                },
                maxLength: 60,
                validate: (value) => {
                  if (
                    value !== value.replace(/[a-zA-Z]/g, '') &&
                    value !== value.replace(/[а-яА-Я]/g, '')
                  ) {
                    return 'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского';
                  }
                  if (
                    value.at(0)?.replace(/[a-zA-Zа-яА-Я]/g, '') ||
                    value.at(-1)?.replace(/[a-zA-Zа-яА-Я]/g, '')
                  ) {
                    return 'Некорректный формат';
                  }

                  return true;
                },
              })}
            />
          </div>
          <div className="flex grow flex-col gap-6">
            <Input
              label="Номер телефона"
              placeholder="Номер телефона"
              value={user?.phone}
              disabled
            />
            <Input
              label="Email"
              placeholder="Email"
              disabled={usersProfileMutation.isLoading}
              {...userProfileForm.register('email')}
            />
          </div>
        </div>
        <Button
          className="self-start"
          type="submit"
        >
          Обновить данные
        </Button>
      </form>
    </main>
  );
};
