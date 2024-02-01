import { Link } from 'react-router-dom';

import { Divider } from '~/components/ui';
import { IconExit, IconUser, IconWatch } from '~/components/ui/icons';
import { ROUTE } from '~/utils/constants';
import { useUser } from '~/utils/contexts';

export const Header = () => {
  const { user } = useUser();

  return (
    <>
      <header>
        <div className="container flex items-center py-6">
          <div className="flex w-full items-center gap-8">
            {user && (
              <>
                <Link
                  to={ROUTE.PROFILE}
                  className="flex items-center gap-4 hover:text-brand"
                >
                  <IconUser />
                  Профиль
                </Link>
                <Link
                  to={ROUTE.HISTORY}
                  className="flex items-center gap-4 hover:text-brand"
                >
                  <IconWatch />
                  История
                </Link>
                <Link
                  to={ROUTE.LOGOUT}
                  className="ml-auto flex items-center gap-4 hover:text-brand"
                >
                  <IconExit />
                  Выйти
                </Link>
              </>
            )}
            {!user && (
              <Link
                to={ROUTE.AUTHORIZATION}
                className="ml-auto flex items-center gap-4 hover:text-brand"
              >
                <IconExit />
                Войти
              </Link>
            )}
          </div>
        </div>
      </header>
      <Divider />
    </>
  );
};
