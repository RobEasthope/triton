import { SuperLink } from '../raw-links/SuperLink/SuperLink';

export const Header = ({ logo, navigation, preview }) => (
  <header>
    <nav>
      <div>Triton</div>
      <div>
        <ul>
          {navigation?.length > 0 &&
            navigation.map((nav) => (
              <li key={nav?._key} className="link">
                <SuperLink className="" link={nav?.link}>
                  {link.title}
                </SuperLink>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  </header>
);
