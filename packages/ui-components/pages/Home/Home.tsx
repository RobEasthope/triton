/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/prop-types */
import { Footer } from '@/UI/navigation/Footer/Footer';
import { Header, HeaderProps } from '@/UI/navigation/Header/Header';
import { FixedFooterLayout } from '@/UI/structural/FixedFooterLayout';
import { MainContentLayout } from '@/UI/structural/MainContentLayout';
import { RenderSections } from '@/UI/base/app/RenderSections/RenderSections';
import { Metadata } from '@/UI/base/app/Metadata/Metadata';
import {
  Home as HomeProps,
  GlobalMetadata,
} from '@/UI/types/sanity-schema';

export const Home = ({
  page,
  globals,
  preview,
}: {
  page: HomeProps;
  globals: { header: HeaderProps; metadata: GlobalMetadata };
  preview: boolean;
}) => (
  <>
    <Metadata page={page} globalMetadata={globals?.metadata} />

    <FixedFooterLayout>
      {Object.keys(globals?.header).length > 0 && (
        <>
          <Header
            logo={globals?.header?.logo}
            navigation={globals?.header?.navigation}
            preview={preview}
          />
        </>
      )}

      <MainContentLayout as="main">
        {page?.sections && (
          <RenderSections sections={page?.sections} preview={preview} />
        )}
      </MainContentLayout>

      <Footer />
    </FixedFooterLayout>
  </>
);
