import { Header as rawHeaderProps } from 'types/sanity-schema';
import {
  ImageAssetProp,
  Picture,
} from 'components/utils/media/Picture/Picture';
import {
  ExternalLinkWithTitleProp,
  InternalLinkWithTitleProp,
} from 'types/links';
import { SuperLink } from '../raw-links/SuperLink/SuperLink';

export interface HeaderProps extends rawHeaderProps {
  navigation?: [ExternalLinkWithTitleProp, InternalLinkWithTitleProp];
  preview: boolean;
}

export const Header = ({ logo, navigation, preview }: HeaderProps) => (
  <header>
    <nav>
      <div>
        <Picture
          asset={logo as ImageAssetProp}
          mode="contain"
          maxWidth={32}
          preview={preview}
        />
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
