/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/prop-types */
import { Footer } from '@/components/navigation/Footer/Footer';
import { Header, HeaderProps } from '@/components/navigation/Header/Header';
import { FixedFooterLayout } from '@/components/structural/FixedFooterLayout';
import { MainContentLayout } from '@/components/structural/MainContentLayout';
import { RenderSections } from '@/components/base/app/RenderSections/RenderSections';
import { Metadata } from '@/components/base/app/Metadata/Metadata';
import {
  Home as HomeProps,
  GlobalMetadata,
} from '@/components/types/sanity-schema';

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
