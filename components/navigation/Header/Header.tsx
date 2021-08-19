import { Picture } from 'components/utils/media/Picture/Picture';
import { SuperLink } from '../raw-links/SuperLink/SuperLink';

export const Header = ({ logo, navigation, preview }) => (
  <header>
    <nav>
      <div>
        <Picture asset={logo} mode="contain" maxWidth={32} preview={preview} />
      </div>
      <div>
        <ul>
          {navigation?.length > 0 &&
            navigation.map((nav) => (
              <li key={nav?._key} className="link">
                <SuperLink className="" link={nav}>
                  {nav.title}
                </SuperLink>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  </header>
);
