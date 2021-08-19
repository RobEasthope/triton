import { Header as rawHeaderProps } from 'types/sanity-schema';
import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'types/links';
import { SuperLink } from '../raw-links/SuperLink/SuperLink';

export interface MobileNavProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
}

export const MobileNav = ({ navigation }: MobileNavProps) => (
  <nav>
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
  </nav>
);
