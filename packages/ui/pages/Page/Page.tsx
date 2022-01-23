import { Footer } from '@/UI/navigation/Footer/Footer';
import { Header, HeaderProps } from '@/UI/navigation/Header/Header';
import { FixedFooterLayout } from '@/UI/base/layout/FixedFooterLayout/FixedFooterLayout';
import { MainContentLayout } from '@/UI/base/layout/MainContentLayout/MainContentLayout';
import { Metadata } from '@/UI/base/app/Metadata/Metadata';
import { RenderSections } from '@/UI/base/app/RenderSections/RenderSections';
import { Page as PageProps, GlobalMetadata } from '@/UI/types/sanity-schema';

export const Page = ({
  page,
  globals,
  preview,
}: {
  page: PageProps;
  globals: { header: HeaderProps; metadata: GlobalMetadata };
  preview: boolean;
}) => (
  <>
    <Metadata page={page} globalMetadata={globals?.metadata} />
    <FixedFooterLayout>
      {Object.keys(globals?.header).length > 0 && (
        <Header
          logo={globals?.header?.logo}
          navigation={globals?.header?.navigation}
          preview={preview}
        />
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
