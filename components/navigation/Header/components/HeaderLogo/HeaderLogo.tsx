import styled from '@emotion/styled';
import { HomeLink } from 'components/utils/links/HomeLink/HomeLink';
import {
  ImageAssetProp,
  Picture,
} from 'components/utils/media/Picture/Picture';

type HeaderLogoProps = {
  logo: ImageAssetProp;
  preview: boolean;
};

const StyledHomeLink = styled(HomeLink)`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 32px;
`;

export const HeaderLogo = ({ logo, preview }: HeaderLogoProps) => (
  <StyledHomeLink>
    <Picture asset={logo} mode="contain" maxWidth={32} preview={preview} />
  </StyledHomeLink>
);
