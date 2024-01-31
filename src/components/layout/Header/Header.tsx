import { Link } from 'react-router-dom';

import { Divider } from '~/components/ui';
import { IconExit, IconUser, IconWatch } from '~/components/ui/icons';
import { ROUTE } from '~/utils/constants';

export const Header = () => (
  <>
    <header>
      <div className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-8">
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
        </div>
        <Link
          to={ROUTE.LOGOUT}
          className="flex items-center gap-4 hover:text-brand"
        >
          <IconExit />
          Выйти
        </Link>
      </div>
    </header>
    <Divider />
  </>
);
