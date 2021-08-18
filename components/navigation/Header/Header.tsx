import { SuperLink } from '../raw-links/SuperLink/SuperLink';

export const Header = () => (
  <header>
    <nav>
      <div>Triton</div>
      <div>
        <ul>
          {header.navigation?.length > 0 &&
            header.navigation.map((nav) => (
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
